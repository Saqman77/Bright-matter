import * as THREE from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GUI } from 'lil-gui';
import { mouse } from "./amouse.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
// import generateGalaxyWorker from './generateGalaxyWorker.js';
ScrollTrigger.defaults({
  fastScrollEnd: true,
  preventOverlaps: true,
  // anticipatePin: 1
});
// const gui = new GUI();
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//texture loader
const loader = new THREE.TextureLoader();
const startTexture = loader.load("./textures/particles/8.png");
const subTexture = loader.load("./textures/particles/4.png");

/**
 * Subparticles
 */
// Geometry
const subcount = 500;
const subpositions = new Float32Array(subcount * 3);

for (let i = 0; i < subcount; i++) {
  subpositions[i * 3 + 0] = (Math.random() - 0.5) * 10;
  subpositions[i * 3 + 1] = 0.5 - Math.random() * 8;
  subpositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

const subparticleGeometry = new THREE.BufferGeometry();
subparticleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(subpositions, 3)
);

// Particles material
const subparticleMaterial = new THREE.PointsMaterial({
  color: "#ffffff",
  size: 0.08,
  blending: THREE.AdditiveBlending,
  alphaMap: subTexture,
  transparent: true,
  depthWrite: false,
  sizeAttenuation: true,
  transparent: true,
});

// Points
const subparticle = new THREE.Points(subparticleGeometry, subparticleMaterial);

/**
 * Galaxy Parameters
 *
 *
 */

let parameters = {
  count: 90000,
  size: 0.01,
  radius: 1.5,
  branches: 3,
  spin: 0,
  randomness: 0.5,
  randomnessPower: 10,
  insideColor: "#312eff",
  outsideColor: "#1b8360",
  position: { x: 0, y: 2, z: 0 },
};

if (window.innerWidth <= 768) {
  parameters = {
    count: 80000,
    size: 0.005,
    radius: 1,
    branches: 3,
    spin: 0,
    randomness: 0.5,
    randomnessPower: 10,
    insideColor: "#312eff",
    outsideColor: "#1b8360",
    position: { x: 0, y: 2, z: 0 },
  };
} else {
  parameters = {
    count: 90000,
    size: 0.01,
    radius: 1.5,
    branches: 3,
    spin: 0,
    randomness: 0.5,
    randomnessPower: 10,
    insideColor: "#312eff",
    outsideColor: "#1b8360",
    position: { x: 0, y: 2, z: 0 },
  };
}

// Create an array for workers
const workers = [];
let workerCount = 4; // Number of workers
if (window.innerWidth <= 768) {
  workerCount = 2;
} else {
  workerCount = 3;
}

let xyz = {};
import Worker from "./zgenerateGalaxyWorker.js?worker";

for (let i = 0; i < workerCount; i++) {
  // const worker = new Worker();
  workers.push(new Worker());
}

let particlesGeometry = new THREE.BufferGeometry();
let particlesMaterial = null;
let particles = null;

const generateGalaxy = () => {
  const cleanParams = {
    count: parameters.count,
    maxRadius: parameters.radius,
    branches: parameters.branches,
    spin: parameters.spin,
    randomnessPower: parameters.randomnessPower,
    insideColor: parameters.insideColor,
    outsideColor: parameters.outsideColor,
  };

  let completedWorkers = 0; // Reset completed workers count
  // const perf1 = performance.now();

  const positionsArray = new Float32Array(parameters.count * 3);
  const colorsArray = new Float32Array(parameters.count * 3);

  particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positionsArray, 3)
  );
  particlesGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(colorsArray, 3)
  );

  workers.forEach((worker, index) => {
    const startIndex = Math.floor((index * parameters.count) / workerCount);
    const endIndex = Math.floor(((index + 1) * parameters.count) / workerCount);

    const workerParams = {
      ...cleanParams,
      startIndex,
      endIndex,
      workerIndex: index,
    };

    worker.postMessage(workerParams);

    worker.onmessage = function (event) {
      const data = event.data;
      const positions = new Float32Array(data.positions);
      const colors = new Float32Array(data.colors);
      const workerIndex = data.workerIndex;
      const startIndex =
        Math.floor((workerIndex * parameters.count) / workerCount) * 3;
      const length = positions.length;

      if (checkForNaN(positions) || checkForNaN(colors)) {
        console.error("NaN values detected in worker data.");
        return;
      }

      if (
        startIndex + length <=
        particlesGeometry.attributes.position.array.length
      ) {
        particlesGeometry.attributes.position.array.set(positions, startIndex);
        particlesGeometry.attributes.color.array.set(colors, startIndex);
      } else {
        console.error("Data received from worker exceeds buffer size.");
        console.error(
          "Received:",
          startIndex + length,
          "Length accepted:",
          particlesGeometry.attributes.position.array.length
        );
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.color.needsUpdate = true;

      completedWorkers++;
      if (completedWorkers === workerCount) {
        if (particles !== null) {
          scene.remove(particles);
          particlesGeometry.dispose();
          particlesMaterial.dispose();
          particles = null;
        }
        if (window.innerWidth <= 768) {
          particlesMaterial = new THREE.PointsMaterial({
            size: parameters.size,
            // alphaMap: startTexture,
            // transparent: true,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
          });
        } else {
          particlesMaterial = new THREE.PointsMaterial({
            size: parameters.size,
            alphaMap: startTexture,
            transparent: true,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
          });
        }

        particles = new THREE.Points(particlesGeometry, particlesMaterial);
        xyz = particles.position.set(
          parameters.position.x,
          parameters.position.y,
          parameters.position.z
        );
        particles.rotation.y = 2;
        xyz.needsUpdate = true;
        scene.add(particles);

        // const perf2 = performance.now();
        // console.log('time taken:', perf2 - perf1);
      }
    };
  });

  function checkForNaN(array) {
    for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i])) {
        return true;
      }
    }
    return false;
  }
};

generateGalaxy();

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */ // Define a function to check if the user is on a mobile device

let camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

if (window.innerWidth <= 768) {
  camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height, 0.1, 50);
}
camera.position.set(0, 6, 4);
camera.rotation.set(-0.767, 0, 0);
subparticle.position.y = camera.position.y;
subparticle.position.x = camera.position.x;
subparticle.position.z = camera.position.z;
scene.add(subparticle);

const cameraGroup = new THREE.Group();
scene.add(cameraGroup);
cameraGroup.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio));

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio));
  if (window.innerHeight >= 1250) {
    debounceGenerateGalaxy();
  } // Debounced galaxy generation on resize
});

let currentSection = 0;

const debounce = (func, delay) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
};

const debounceGenerateGalaxy = debounce(generateGalaxy, 0.005);
gsap.defaults({});
const tl = gsap.timeline();
let direction = "down";

// let isScrollEventActive = true; // Flag to control the scroll event listener
const lenis = new Lenis({
  duration: 1,
  lerp: 0.05,
  wheelMultiplier: 1,
  easing: (t) => t * (1 - t),
  smooth: true,
  smoothWheel: true,
  smoothTouch: true,
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// lenis.on("scroll", ScrollTrigger.update);

const sections = [
  {
    id: "#main",
    camera: {
      position: { x: 0, y: 6, z: 4 },
      rotation: { x: -0.767, y: 0, z: 0 },
    },
  },
  {
    id: "#tag-section",
    galaxy: {
      radius: 1.5,
      spin: 0,
      randomnessPower: 10,
      onStartValues: mobileCheck()
        ? { count: 40000, size: 0.005, randomnessPower: 20, randomness: 0 }
        : { count: 10000, size: 0.03, randomnessPower: 20, randomness: 0 },
      onCompleteValues: mobileCheck()
        ? { count: 80000, size: 0.005 }
        : { count: 40000, size: 0.01 },
    },
    camera: {
      position: { x: 0, y: 6, z: 4 },
      rotation: { x: -0.767, y: 0, z: 0 },
    },
  },
  {
    id: "#pin-second",
    galaxy: {
      radius: mobileCheck() ? 1.4 : 4,
      spin: mobileCheck() ? 4 : 1.5,
      randomnessPower: mobileCheck() ? 6 : 4,
      onStartValues: mobileCheck()
        ? { count: 30000, size: 0.005, randomnessPower: 20, randomness: 0 }
        : { count: 90000, size: 0.01, randomnessPower: 20, randomness: 0 },
      onCompleteValues: mobileCheck()
        ? { count: 60000, size: 0.005 }
        : { count: 250000, size: 0.01 },
    },
    camera: {
      position: {
        x: mobileCheck() ? 0 : 0,
        y: mobileCheck() ? 3 : 4,
        z: mobileCheck() ? 2 : 4,
      },
      rotation: { x: -0.3, y: 0, z: 0 },
    },
  },
  {
    id: "#expertise",
    camera: {
      position: {
        x: mobileCheck() ? -0.5 : -6,
        y: mobileCheck() ? 6 : 12,
        z: 0.5,
      },
      rotation: { x: -1.6, y: 0, z: 0 },
    },
  },
  {
    id: "#about",
    camera: {
      position: {
        x: mobileCheck() ? 0.5 : 3.5,
        y: mobileCheck() ? 5 : 7,
        z: mobileCheck() ? 3.5 : 6.5,
      },
      rotation: { x: -0.93, y: 0, z: 0 },
    },
  },
  {
    id: "#services",
    camera: {
      position: { x: mobileCheck() ? -1.5 : -4.5, y: 3.5, z: 1 },
      rotation: { x: -0.895, y: -0.455, z: -0.347 },
    },
  },
  {
    id: "#team",
    camera: {
      position: { x: 2, y: 2, z: 0 },
      rotation: { x: 0, y: 2, z: 0 },
    },
  },
  {
    id: "#exit",
    camera: {
      position: { x: mobileCheck() ? -0.5 : -3.5, y: 2, z: 2.5 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
];

// Function to hide scene smoothly
const hideScene = () => {
  scene.traverse((object) => {
    if (object.material && object.material.opacity !== undefined) {
      gsap.to(object.material, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          object.visible = false; // Hide objects after fade-out
        },
      });
    }
  });
};

// Function to show scene smoothly
const showScene = () => {
  scene.traverse((object) => {
    if (object.material && object.material.opacity !== undefined) {
      object.visible = true; // Show objects before fading in
      gsap.to(object.material, {
        opacity: 1,
        duration: 1,
      });
    }
  });
};

// ScrollTrigger for scene visibility
ScrollTrigger.create({
  
  trigger: "#exit",
  start: "20% top",
  end: "20%",
  onLeave: hideScene, // Hide when leaving last section
  onEnterBack: showScene, // Show when re-entering last section
});

// ScrollTrigger for sections
sections.forEach((section) => {
  ScrollTrigger.create({
    // refreshPriority:1,
    trigger: section.id,
    start: "top top",
    end: "bottom ",
    onEnter: () => animateSection(section),
    onEnterBack: () => animateSection(section),
  });
});

// Function to animate section transitions
function animateSection(section) {
  let duration = 1.5;
  if (section.galaxy) {
    animateGalaxy(section.galaxy);
  }
  gsap.to(camera.position, {
    ...section.camera.position,
    duration,
    ease: "power1.out",
  });
  gsap.to(camera.rotation, {
    ...section.camera.rotation,
    duration,
    ease: "power1.out",
  });
}

// Function to animate galaxy transitions
function animateGalaxy(params) {
  gsap.to(parameters, {
    ...params,
    onStart: () => {
      Object.assign(parameters, params.onStartValues);
      debounceGenerateGalaxy();
    },
    onComplete: () => {
      Object.assign(parameters, params.onCompleteValues);
      debounceGenerateGalaxy();
    },
    onUpdate: debounceGenerateGalaxy,
  });
}

// Mobile device check
function mobileCheck() {
  return window.innerWidth <= 768;
}

const teamS = document.querySelector("#team");
const secondSection = document.querySelector("#expertise");
const about = document.querySelector("#about");
const horiSection = document.querySelector("#services");
const horizontal = document.querySelector(".services-container");
const bye = document.querySelector(".e-main-heading");
const xWidth = horizontal.getBoundingClientRect().width;

const tl2 = gsap.timeline({
  // scrollTrigger:{
  //   refreshPriority:1
  // }
});

gsap.to(".hero", {
  duration: 4,
  opacity: 0,
  ease: "power1.inOut",
  // y:'50%',
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    // preventOverlaps:true,
    end: "+=50%",
    // pin: true,
    scrub: 2,
    markers: false, // Set to false to hide debugging markers
  },
});

const heros = document.querySelectorAll("#pin-hero");

const tweenkleKhanna = gsap.timeline();
heros.forEach((hero, i) => {
  tweenkleKhanna.to(hero, {
    duration: 4,
    opacity: 0,
    ease: "power1.inOut",
    y: "100%",
    // preventOverlaps:true,
    scrollTrigger: {
      trigger: hero,
      pin: true,
      start: "bottom 20%",
      // preventOverlaps:true,
      end: "+=50%",
      scrub: true,
      // markers: false  // Set to false to hide debugging markers
    },
  });
});
// const seconds = document.querySelector("#pin-second");

tl2.to(".a", {
  opacity: 0,
  // ease: "power4.inOut",
  // backdropFilter: "blur(10px)",
  scrollTrigger: {
    trigger: ".a",
    pin: true,
    // pinSpacer:false,
    start: "top top",
    end: "bottom  ",
    scrub: true,
    // markers: true // Set to false to hide debugging markers
  },
});


tl2.to(
  secondSection,

  {
    backdropFilter: "blur(10px)",
    backgroundColor:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0))",
    ease: "power2.out",
    // opacity:0,
    // duration:1,
    scrollTrigger: {
      trigger: secondSection,
      pin: true,
      start: "top top",
      end: "40%",
      scrub: true,
      onLeave: () => {
        gsap.to(secondSection, {
          // backdropFilter:'blur(0px)',
          // backgroundColor:'linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0))',
          ease: "power2.out",
          opacity: 0,
        });
        // ScrollTrigger.update()
      },
      onEnterBack: () => {
        gsap.to(secondSection, {
          backdropFilter: "blur(10px)",
          backgroundColor:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0))",
          ease: "power2.in",
          opacity: 1,
        });
      },
    },
  }
);

tl2.fromTo(
  about,{
    backdropFilter:'blur(0px)',
    // opacity: 0,
  },

  {
    backdropFilter:'blur(20px)',
    opacity: 1,
    // webkitBackdropFilter:'blur(0px)',
    ease: "power1.out",
    scrollTrigger: {
      trigger: about,
      pin: true,
      start: "top top",
      end: "50%  ",
      // pinSpacer: true,
      // pinSpacing: true,
      // preventOverlaps:true,
      // markers: true,
      // refreshPriority: 1,
      // pinType: transform,
      scrub: true,
      onLeave: () => {
        gsap.to(about, {
          opacity: 0,
          ease: "power1.out",
        });},
      //   // ScrollTrigger.update()
      // },
      onEnterBack: () => {
        gsap.to(about, {
          opacity: 1,
          backdropFilter: "blur(20px)",
          ease: "power1.in",
        });
      },
      // onEnter:()=>{
      //     ScrollTrigger.update()
      // },

      // markers:true
      // Set to false to hide debugging markers
    },
  }
);
tl2.to(
  horiSection,

  {
    // backdropFilter:'blur(10px)',
    // opacity:1,
    // webkitBackdropFilter:'blur(0px)',
    ease: "power1.out",
    scrollTrigger: {
      trigger: horiSection,
      // preventOverlaps:true,
      start: "top top",
      end: window.innerWidth > 1250 ? "+=1500vh" : "+=900vh",
      pin: true,
      scrub: 1,
      // pinSpacer: true,
      // pinSpacing: true,
      //   refreshPriority: 1,
      ease: "power2.out",
      //   markers: true,
      onLeave: () => {
        gsap.to(horiSection, {
          opacity: 0,
          ease: "power1.out",
        });
      },
      // onEnter:()=>{
      //     ScrollTrigger.refresh()
      // },
      onEnterBack: () => {
        gsap.to(horiSection, {
          opacity: 1,
          ease: "power1.in",
        });
      },
      onUpdate: (self) => {
        gsap.to(horizontal, {
          x: `${-xWidth * self.progress}px`,
        });
      },
    },
  }
);

tl2.to(
  teamS,

  {
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: teamS,
      pin: window.innerWidth < 1250 ? false : true,
      start: "top top",
      end: "50%",
      // pinSpacer: false,
      // pinSpacing: false,
      scrub: true,
      onLeave: () => {
        gsap.to(teamS, {
          opacity: window.innerWidth < 1250 ? 1 : 0,
          backdropFilter: window.innerWidth < 1250 ? "blur(10px)" : "blur(0px)",
        });
        // ScrollTrigger.update()
      },
      onEnterBack: () => {
        gsap.to(teamS, {
          opacity: 1,
          backdropFilter: "blur(10px)",
        });
      },
    },
  }
);

tl2.to(bye,{
  // color:"#2E2E2E",
  // textShadow:'none',
  // background:'#d3d3d3',
  // ease: "power1.out",
  scrollTrigger: {
    trigger: bye,
    pin: true,
    start: "center center",
    end: "+=400px",
    // pinSpacing:true,
    // markers:true,
    onUpdate:(self)=>{
      if(self.progress >= .5){
        bye.innerText = "we'll make sure you do.";
        gsap.fromTo(bye, {
          opacity:1
        },{
          // textShadow:'none',
          opacity:1,
          color:'#2E2E2E',
          ease: "power1.out"
        });
        gsap.to('#exit', {
          background:'#d3d3d3',
          ease: "power1.out",
        });
      }
      else{
        bye.innerText = "Struggling to stand out?";
        gsap.fromTo(bye, {
          opacity:1
        },{
          // textShadow:'none',
          opacity:1,
          color:'#d3d3d3',
          ease: "power1.out",
        });
        gsap.to('#exit', {
          background:'transparent',
          ease: "power1.out",
        });
      }
    },
    scrub:1,
    // onLeave: () => {
    //   bye.innerText = "we'll make sure you do.";
    //   gsap.to(bye, {
    //     // textShadow:'none',
    //     color:'#2E2E2E',
    //     ease: "power1.out",
    //   });
    //   gsap.to('#exit', {
    //     background:'#d3d3d3',
    //     ease: "power1.out",
    //   });
    // },
    // onEnterBack: () => {
    //   bye.innerText = "Struggling to stand out?";
    //   gsap.to(bye, {
    //     // textShadow:'none',
    //     color:'#d3d3d3',
    //     ease: "power1.out",
    //   });
    //   gsap.to('#exit', {
    //     background:'transparent',
    //     ease: "power1.out",
    //   });
    // },

  },
})

let parentTl = gsap.timeline({
  scrollTrigger: {
      trigger: ".r-section",
      start: "top top",
      // refreshPriority:1,
      end:"+=100%",
      pin:true,
      // pinSpacer:false,
      scrub:2.5,
      toggleActions: "play none none reverse",
      // markers:true
  }
});

// Text animation
let textTl = gsap.timeline();
textTl.from(".worder", {
  duration: 0.8,
  y: -20,
  opacity: 0,
  ease: "power3.inOut",
  stagger: 0.1
});

// Moving elements - Top sections
let topSectionTl = gsap.timeline();
topSectionTl.to(".top-left, .top-right", {
  duration: 2,
  top: "0",
  ease: "power3.inOut"
});

// Moving elements - Bottom right
let bottomRightTl = gsap.timeline();
bottomRightTl.to(".bottom-right", {
  duration: 2,
  bottom: "0",
  ease: "power3.inOut"
});

// Left & Right movements
let sideMovementTl = gsap.timeline();
sideMovementTl.to(".top-left", { left: "0", duration: 2, ease: "power3.inOut" })
            .to(".top-right", { right: "0", duration: 2, ease: "power3.inOut" }, 0)
            .to(".bottom-right", { right: "0", duration: 2, ease: "power3.inOut" }, 0);

// Block animations
let blockTl = gsap.timeline();
blockTl.to(".block-left", { left: "-50%", duration: 2, ease: "power3.inOut" })
     .to(".block-right", { right: "-50%", duration: 2, ease: "power3.inOut" }, 0);

// Footer animation
let footerTl = gsap.timeline();
footerTl.from(".footer-container", { duration: 2, opacity: 0, ease: "power3.inOut" });

// Fade out text
let fadeOutTextTl = gsap.timeline();
fadeOutTextTl.to(".worder", { duration: 0.8, opacity: 0, ease: "power3.inOut", stagger: 0.1 });

// Add all child timelines to parent timeline in order
parentTl.add(textTl)
      .add(topSectionTl)
      .add(bottomRightTl)
      .add(sideMovementTl)
      .add(blockTl)
      .add(footerTl)
      .add(fadeOutTextTl);

let masterTl = gsap.timeline({
  scrollTrigger:{
    refreshPriority:1
  }
});
masterTl.add(tl2).add(parentTl);

// This should not be undefined
// Cursor position object
const cursor = { x: 0, y: 0 };
let isPhone = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let orientation = { alpha: 0, beta: 0, gamma: 0 };

// Function to handle device orientation
function handleDeviceOrientation(event) {
  orientation.alpha = event.alpha; // Rotation around z-axis
  orientation.beta = event.beta; // Rotation around x-axis
  orientation.gamma = event.gamma; // Rotation around y-axis
  console.log(
    `Orientation updated: alpha=${orientation.alpha}, beta=${orientation.beta}, gamma=${orientation.gamma}`
  );
}

// Request permission for iOS devices
function requestDeviceOrientationPermission() {
  const statusDiv = document.getElementById("status");
  const requestButton = document.getElementById("requestButton");
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    console.log("Requesting device orientation permission...");
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          console.log("Device orientation permission granted.");
          statusDiv.textContent = "Device orientation permission granted.";
          window.addEventListener("deviceorientation", handleDeviceOrientation);
          statusDiv.remove();
          requestButton.remove();
        } else {
          console.log("Device orientation permission denied.");
          statusDiv.textContent = "Device orientation permission denied.";
        }
      })
      .catch((error) => {
        console.error("Error requesting device orientation permission:", error);
        statusDiv.textContent =
          "Error requesting device orientation permission.";
      });
  } else {
    console.log("Device orientation permission request not required.");
    statusDiv.textContent =
      "Device orientation permission request not required.";
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    statusDiv.remove();
    requestButton.remove();
  }
}

// Add event listener to the button
document
  .getElementById("requestButton")
  .addEventListener("click", requestDeviceOrientationPermission);

// Throttle function to limit the frequency of event handling

// Add mousemove event listener for desktop
if (!isPhone) {
  window.addEventListener("mousemove", (event) => {
    cursor.x = mouse.x / sizes.width - 0.5;
    cursor.y = mouse.y / sizes.height - 0.5;
  });
}

// Display status if not on a mobile device
if (window.innerWidth > 1250) {
  document.getElementById("status").textContent = "Not a mobile device.";
}

/**
   * Animate
html
Copy code
   */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  if (particles) {
    particles.rotation.y = elapsedTime * 0.05;
  }

  subparticle.position.x = Math.cos(elapsedTime) * 0.05 + camera.position.x;
  subparticle.position.z = Math.sin(elapsedTime) * 0.05 + camera.position.z - 5;
  subparticle.position.y = Math.sin(elapsedTime) * 0.05 + camera.position.y;

  // Animate camera
  if (isPhone) {
    // Apply orientation data to camera group on mobile
    const parallaxX = orientation.gamma / 90; // Normalize gamma to [-1, 1]
    const parallaxY = orientation.beta / 90; // Normalize beta to [-1, 1]

    cameraGroup.position.x +=
      (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
    cameraGroup.position.y +=
      (parallaxY - cameraGroup.position.y) * 2 * deltaTime;
  } else {
    // Apply cursor movement to camera group on desktop
    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;

    cameraGroup.position.x +=
      (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
    cameraGroup.position.y +=
      (parallaxY - cameraGroup.position.y) * 2 * deltaTime;
  }

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

// Start the animation
tick();

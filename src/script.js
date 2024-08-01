import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GUI } from 'lil-gui';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
// import generateGalaxyWorker from './generateGalaxyWorker.js';

// const gui = new GUI();
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

//texture loader
const loader = new THREE.TextureLoader()
const startTexture = loader.load('./textures/particles/8.png')
const subTexture = loader.load('./textures/particles/4.png')

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
subparticleGeometry.setAttribute('position', new THREE.BufferAttribute(subpositions, 3));

// Particles material
const subparticleMaterial = new THREE.PointsMaterial({
    color: '#ffffff',
    size: 0.08,
    blending: THREE.AdditiveBlending,
    alphaMap:subTexture,
    transparent:true,
    depthWrite: false,
    sizeAttenuation: true,
    transparent: true
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
    insideColor: '#312eff',
    outsideColor: '#1b8360',
    position:{x:0, y:2, z:0}
};


if(window.innerWidth <= 768)
 {
     parameters = {
        count: 30000,
        size: 0.01,
        radius: 1,
        branches: 3,
        spin: 0,
        randomness: 0.5,
        randomnessPower: 10,
        insideColor: '#312eff',
        outsideColor: '#1b8360',
        position:{x:0, y:2, z:0}
    };
    
 }
 else
{ parameters = {
    count: 90000,
    size: 0.01,
    radius: 1.5,
    branches: 3,
    spin: 0,
    randomness: 0.5,
    randomnessPower: 10,
    insideColor: '#312eff',
    outsideColor: '#1b8360',
    position:{x:0, y:2, z:0}
};}


// Create an array for workers
const workers = [];
let workerCount = 4; // Number of workers
if (window.innerWidth <= 768)
{
    workerCount = 1
}

else
{
    workerCount = 4
}


let xyz = {}
import Worker from './generateGalaxyWorker.js?worker';

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
        outsideColor: parameters.outsideColor
    };

    let completedWorkers = 0; // Reset completed workers count
    // const perf1 = performance.now();
    if (particles !== null) {
        scene.remove(particles);
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        particles = null;
    }

    const positionsArray = new Float32Array(parameters.count * 3);
    const colorsArray = new Float32Array(parameters.count * 3);

    particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    workers.forEach((worker, index) => {
        const startIndex = Math.floor((index * parameters.count) / workerCount);
        const endIndex = Math.floor(((index + 1) * parameters.count) / workerCount);

        const workerParams = {
            ...cleanParams,
            startIndex,
            endIndex,
            workerIndex: index
        };

        worker.postMessage(workerParams);

        worker.onmessage = function(event) {
            const data = event.data;
            const positions = new Float32Array(data.positions);
            const colors = new Float32Array(data.colors);
            const workerIndex = data.workerIndex;

            const startIndex = Math.floor((workerIndex * parameters.count) / workerCount) * 3;
            const length = positions.length;

            if (checkForNaN(positions) || checkForNaN(colors)) {
                console.error("NaN values detected in worker data.");
                return;
            }

            if (startIndex + length <= particlesGeometry.attributes.position.array.length) {
                particlesGeometry.attributes.position.array.set(positions, startIndex);
                particlesGeometry.attributes.color.array.set(colors, startIndex);
            } else {
                console.error("Data received from worker exceeds buffer size.");
                console.error('Received:', startIndex + length, 'Length accepted:', particlesGeometry.attributes.position.array.length);
            }

            particlesGeometry.attributes.position.needsUpdate = true;
            particlesGeometry.attributes.color.needsUpdate = true;

            completedWorkers++;
            if (completedWorkers === workerCount) {
                if (window.innerWidth<= 768)
                {
                    particlesMaterial = new THREE.PointsMaterial({
                        size: parameters.size,
                        // alphaMap: startTexture,
                        // transparent: true,
                        sizeAttenuation: true,
                        depthWrite: false,
                        blending: THREE.AdditiveBlending,
                        vertexColors: true
                    });
                }
                else
                {
                    particlesMaterial = new THREE.PointsMaterial({
                        size: parameters.size,
                        alphaMap: startTexture,
                        transparent: true,
                        sizeAttenuation: true,
                        depthWrite: false,
                        blending: THREE.AdditiveBlending,
                        vertexColors: true
                    });
                }

                particles = new THREE.Points(particlesGeometry, particlesMaterial);
                xyz = particles.position.set(parameters.position.x, parameters.position.y, parameters.position.z);
                particles.rotation.y = 2
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


// Initial galaxy generation
// gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(generateGalaxy);
// gui.add(parameters, 'size').min(0.001).max(2).step(0.001).onFinishChange(generateGalaxy);
// gui.add(parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy);
// gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy);
// gui.add(parameters, 'spin').min(-5).max(5).step(0.001).onFinishChange(generateGalaxy);
// gui.add(parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy);
// gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy);
// gui.add(parameters.position, 'x').min(-10).max(10).step(0.001).onFinishChange(generateGalaxy);
// gui.add(parameters.position, 'y').min(-10).max(10).step(0.001).onFinishChange(generateGalaxy);
// gui.add(parameters.position, 'z').min(-10).max(10).step(0.001).onFinishChange(generateGalaxy);




generateGalaxy();
// workers.forEach(worker => worker.terminate());

// window.addEventListener('beforeunload', () => {
//     workers.forEach(worker => worker.terminate());
// });



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};


/**
 * Camera
 */// Define a function to check if the user is on a mobile device


let camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);

if(window.innerWidth <= 768){camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height, 0.1, 50);}
camera.position.set(0, 6, 4);
camera.rotation.set(-0.767, 0,0);
subparticle.position.y = camera.position.y
subparticle.position.x = camera.position.x
subparticle.position.z = camera.position.z
scene.add(subparticle);

const cameraGroup = new THREE.Group();
scene.add(cameraGroup);
cameraGroup.add(camera);

// gui.add(camera.position, 'x').min(-30).max(30).step(0.5);
// gui.add(camera.position, 'y').min(-30).max(30).step(0.5);
// gui.add(camera.position, 'z').min(-30).max(30).step(0.5);
// gui.add(camera.rotation, 'x').min(-100).max(100).step(0.01).onFinishChange(generateGalaxy);
// gui.add(camera.rotation, 'y').min(-100).max(100).step(0.01).onFinishChange(generateGalaxy);
// gui.add(camera.rotation, 'z').min(-100).max(100).step(0.01).onFinishChange(generateGalaxy);

// Controls


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio));

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio));
    if(window.innerHeight>=1250){debounceGenerateGalaxy();} // Debounced galaxy generation on resize
});



let currentSection = 0;

const debounce = (func, delay) => {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
};

// let isUpdating = false;

// const updateGalaxy = () => {
//     if (!isUpdating) {
//         isUpdating = true;
//         requestIdleCallback(() => {
//             generateGalaxy();
//             isUpdating = false;
//         });
//     }
// };

const debounceGenerateGalaxy = debounce(generateGalaxy, 0.05);
gsap.defaults({preventOverlaps:true,
    fastScrollEnd:true
})
const tl = gsap.timeline()
let direction = 0;

// let isScrollEventActive = true; // Flag to control the scroll event listener
const lenis = new Lenis({
    duration: 1,
    lerp:0.05,
    wheelMultiplier: 1,
    easing: (t) => t * (1 - t), // Custom easing function
    smooth: true,
});
let scrollY = 0;
lenis.on('scroll', ({scroll}) => {
     // Exit if the scroll event is disabled

    // scrollY = window.scrollY;
    // console.log('Scrolling at position:', scroll)
    const newSection = Math.round(scroll / sizes.height);
    // if(pageYOffset===0)
    // {
    //     generateGalaxy()
    // }
    if (newSection !== currentSection) { // Trigger only if section changes significantly
        direction = newSection > currentSection ? 'down' : 'up';
        currentSection = newSection;
        // console.log(currentSection)
        // if(currentSection <=1)
        // {
        //     generateGalaxy()
        // }

        // gsap.defaults({
        //     onComplete:generateGalaxy()
        // })
        // Animate galaxy parameters with GSAP
        if (currentSection == 0 ) {        gsap.to(camera.position,
            {
                x:0,
                z:4,
                y:6,
                ease:'power1.inOut',
                duration:1,
            })
        gsap.to(camera.rotation,
            {
                duration:1,
                ease:"power1.inOut",
                x:-0.767,
                z:0,
                y:0
            })}
        if (currentSection == 1 ) 
        {
            if(window.innerWidth <= 768)
                {
                    gsap.to(parameters, {
                        radius:1.5,
                        spin:0,
                        randomnessPower:10,
                        // duration:1.5,
                        // branches: 4,
                        onStart: () => {
                            parameters.count =10000;
                            parameters.size = 0.01
                            parameters.randomnessPower = 20
                            parameters.randomness = 0
                            // parameters.branches = direction === 'down' ? 5 : 3;
                            debounceGenerateGalaxy
                        },            
                        onComplete: () => {
                            parameters.count = 40000;
                            parameters.size =0.01;
                            // parameters.branches = direction === 'down' ? 5 : 3;
                            debounceGenerateGalaxy
                        },
                        onUpdate: debounceGenerateGalaxy
                    });
            
                    gsap.to(camera.position,
                        {
                            x:0,
                            z:4,
                            y:6,
                            ease:'power1.inOut',
                            // duration:1,
                        })
            
                    gsap.to(camera.rotation,
                        {
            
                            ease:"power1.inOut",
                            x:-0.767,
                            z:0,
                            y:0
                        })
                }
            
            else
                {
                    gsap.to(parameters, {
                        radius:1.5,
                        spin:0,
                        randomnessPower:10,
                        // duration:1.5,
                        // branches: 4,
                        onStart: () => {
                            parameters.count =10000;
                            parameters.size = 0.03
                            parameters.randomnessPower = 20
                            parameters.randomness = 0
                            // parameters.branches = direction === 'down' ? 5 : 3;
                            debounceGenerateGalaxy
                        },            
                        onComplete: () => {
                            parameters.count = 40000;
                            parameters.size =0.01;
                            // parameters.branches = direction === 'down' ? 5 : 3;
                            debounceGenerateGalaxy
                        },
                        onUpdate: debounceGenerateGalaxy
                    });
            
                    gsap.to(camera.position,
                        {
                            x:0,
                            z:4,
                            y:6,
                            ease:'power1.inOut',
                            // duration:1,
                        })
            
                    gsap.to(camera.rotation,
                        {
            
                            ease:"power1.inOut",
                            x:-0.767,
                            z:0,
                            y:0
                        })
                }
        }
        if (currentSection == 2 ) {
            if(window.innerWidth <= 768)
                {
                    gsap.to(parameters, {
                        radius:1.2,
                        spin:5,
                        randomnessPower:7,
                        duration:1.5,
                        // branches: 4,
                        onStart: () => {
                            parameters.count = 40000;
                            parameters.size = 0.01
                            parameters.randomnessPower = 20
                            parameters.randomness = 0.01
                            // parameters.branches = direction === 'down' ? 5 : 3;
                            debounceGenerateGalaxy
                        },            
                        onComplete: () => {
                            parameters.count =50000;
                            parameters.size = 0.01;
                            // parameters.branches = direction === 'down' ? 5 : 3;
                            debounceGenerateGalaxy
                        },
                        onUpdate: debounceGenerateGalaxy
                    });
            
                    gsap.to(camera.position,
                        {
                            x: 0,
                            z:2,
                            y:3,
                            ease:'power1.inOut',
                            // duration:1,
                        })
                    gsap.to(camera.rotation,
                        {
                            ease:"power1.inOut",
                            x:-0.3,
                            z:0,
                            y:0
                        })
                }
        else{gsap.to(parameters, {
            radius:4,
            spin:1.5,
            randomnessPower:4,
            duration:2,
            // branches: 4,
            onStart: () => {
                parameters.count =10000;
                parameters.size = 0.02
                parameters.randomnessPower = 20
                parameters.randomness = 0
                // parameters.branches = direction === 'down' ? 5 : 3;
                debounceGenerateGalaxy
            },            
            onComplete: () => {
                parameters.count =250000;
                parameters.size = 0.01;
                // parameters.branches = direction === 'down' ? 5 : 3;
                debounceGenerateGalaxy
            },
            onUpdate: debounceGenerateGalaxy
        });

        gsap.to(camera.position,
            {
                x: 0,
                z:4,
                y:4,
                ease:'power1.inOut',
                // duration:1,
            })
        gsap.to(camera.rotation,
            {
                ease:"power1.inOut",
                x:-0.3,
                z:0,
                y:0
            })}
    }

    // if(currentSection==3)
    //     {
    //         gsap.to(camera.rotation,
    //             {
    //                 x:-1.65,
    //                 y:0,
    //                 z:7.7,
    //                 duration:3,
    //                 ease:'power1.inOut'
    //             })

    //         tl.to(camera.position,
    //         {
    //             x:0,
    //             y:4,
    //             z:,
    //             ease:'power1.inOut'
    //         })
    //     }

    if(currentSection == 4)
        {
            if (window.innerWidth <= 768)
                {
            tl.to(camera.position,
                {
                    x:-.5,
                    y:6,
                    z:0.5,
                    // duration:1,
                    ease:'linear',
                   
                    
                })
            tl.to(camera.rotation,
                {
                    x:-1.6,
                    y:0,
                    z:0,
                    // duration:1,
                    ease:'linear'
                })}
    else
{tl.to(camera.position,
    {
        x:-6,
        y:12,
        z:0.5,
        // duration:1,
        ease:'linear',
       
        
    })
tl.to(camera.rotation,
    {
        x:-1.6,
        y:0,
        z:0,
        // duration:1,
        ease:'linear'
    })}}
// }
    if(currentSection == 5)
        {
            if (window.innerWidth <= 768)
                {
                    tl.to(camera.position,
                        {
                            x:.5,
                            y:5,
                            z:3.5,
                            ease:'power1.inOut',
                            // duration:1
                        })
                    tl.to(camera.rotation,
                        {
                            x:-0.93,
                            y:0,
                            z:0,
                            ease:'power1.inOut'
                        })
                }
else
{
    tl.to(camera.position,
    {
        x:3.5,
        y:7,
        z:6.5,
        ease:'power1.inOut',
        // duration:1
    })
    tl.to(camera.rotation,
    {
        x:-0.93,
        y:0,
        z:0,
        ease:'power1.inOut'
    })}}
    if(currentSection == 6)
        {
            if (window.innerWidth <= 768)
            {
                tl.to(camera.position,
                    {
                        x:-1.5,
                        y:3.5,
                        z:1,
                        ease:'power1.inOut'
                    })
                tl.to(camera.rotation,
                    {
                        x:- 0.895,
                        y:- 0.455,
                        z:- 0.347,
                        ease:'power1.inOut',
                        // duration:1,
                    })
            }

            else
            {
                tl.to(camera.position,
                    {
                        x:-4.5,
                        y:3.5,
                        z:1,
                        ease:'power1.inOut'
                    })
                tl.to(camera.rotation,
                    {
                        x:- 0.895,
                        y:- 0.455,
                        z:- 0.347,
                        ease:'power1.inOut',
                        // duration:1,
                    })
            }
        }
    if(currentSection == 7)
        {
tl.to(camera.position,
    {
        x:2,
        y:2,
        z:0,
        ease:'power1.inOut'
    })
tl.to(camera.rotation,
    {
        x:0,
        y:2,
        z:0,
        ease:'power1.inOut',
        // duration:1,
    })}
    // if(currentSection == 7)
    //     {
    //         tl.to(camera.position,
    //             {
    //                 x:direction === 'down' ? -1: 2,
    //                 y:direction === 'down' ? 1.5 : 2,
    //                 z:direction === 'down' ? -1 : 0,
    //                 ease:'power2.inOut',
    //                 duration:2,
    //             })
    //         tl.to(camera.rotation,
    //             {
    //                 x:direction === 'down' ? 0.787 : 0,
    //                 y:direction === 'down' ? -10 : 2 ,
    //                 z:direction === 'down' ? 0: 0,
    //                 ease:'power2.inOut',
    //                 duration:1,
    //             })}
    if(currentSection == 8)
        // {
            {
                if (window.innerWidth <= 768)
                
                    {
                        tl.to(camera.position,
                            {
                                x:-.5,
                                y:2,
                                z:2.5,
                                ease:'power1.inOut',
                                // duration:1,
                            })
                        tl.to(camera.rotation,
                            {
                                x:0,
                                y:0,
                                z:0,
                                ease:'power1.inOut',
                                // duration:1,
                            })
                    }

                else 
                {
                    tl.to(camera.position,
                        {
                            x:-3.5,
                            y:2,
                            z:2.5,
                            ease:'power1.inOut',
                            // duration:1,
                        })
                    tl.to(camera.rotation,
                        {
                            x:0,
                            y:0,
                            z:0,
                            ease:'power1.inOut',
                            // duration:1,
                        })
                }
            }

        
            
    }
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
lenis.on('scroll', () => {
    ScrollTrigger.update();
});

// Create a simple ScrollTrigger animation
ScrollTrigger.defaults({
    markers: false,
    // preventOverlaps:true
  });

  gsap.to('.hero',
    {
        duration:4,
        opacity:0,
        ease:'power1.inOut',
        // y:'50%',
        scrollTrigger:
            {
                trigger: 'body',
                start: 'top top',
                // preventOverlaps:true,
                end: '+=50%',
                // pin: true,
                scrub:2,
                markers: false  // Set to false to hide debugging markers
            }
    })

  const heros = document.querySelectorAll('#pin-hero')
  
  const tweenkleKhanna = gsap.timeline()
  heros.forEach((hero, i) => 
    {

        tweenkleKhanna.to(hero,
        {
            duration:4,
            opacity:0,
            ease:'power1.inOut',
            y:'100%',
            preventOverlaps:true,
            scrollTrigger:
                {
                    trigger: hero,
                    pin: true,
                    start: 'bottom 20%',
                    // preventOverlaps:true,
                    end: '+=50%',
                    scrub:true,
                    // markers: false  // Set to false to hide debugging markers
                }
        })
    });
  const seconds = document.querySelectorAll('#pin-second')
  

  seconds.forEach((second, i) => 
    {

    gsap.to(second,
        {
            duration:2,
            opacity:0,
            ease:'power4.inOut',
            backdropFilter:'blur(20px)',
            scrollTrigger:
                {
                    trigger: second,
                    pin: true,
                    // pinSpacer:false,
                    start: 'top top',
                    end: 'center',
                    scrub:true,
                    // markers: true // Set to false to hide debugging markers
                }
        })
    });

  const sections = document.querySelectorAll('#pin-section')
  

  sections.forEach((section, i) => 
    {

    gsap.to(section,
        {
            duration:2,
            opacity:0,
            backdropFilter:'blur(20px)',
            ease:'power1.inOut',
            scrollTrigger:
                {
                    trigger: section,
                    pin: true,
                    start: 'top top',
                    end: 'bottom',
                    // pinSpacer:false,
                    scrub: true,
                    // markers: true // Set to false to hide debugging markers
                }
        })
    });

    // gsap.to('.footer',
    //     {
    //         duration:3,
    //         backdropFilter:'blur(5px)',
    //         ease:'power1.inOut',
    //         scrollTrigger:
    //             {
    //                 trigger: '.footer',
    //                 // pin: true,
    //                 start: 'top center',
    //                 end: 'center top',
    //                 // pinSpacer:false,
    //                 scrub: true,
    //                 // markers: true // Set to false to hide debugging markers
    //             }
    //     })
  


 // This should not be undefined
// Cursor
const cursor = { x: 0, y: 0 };
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let orientation = { alpha: 0, beta: 0, gamma: 0 };

// Function to handle device orientation
function handleDeviceOrientation(event) {
    orientation.alpha = event.alpha;  // Rotation around z-axis
    orientation.beta = event.beta;    // Rotation around x-axis
    orientation.gamma = event.gamma;  // Rotation around y-axis
}

// Request permission for iOS devices
function requestDeviceOrientationPermission() {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleDeviceOrientation);
                }
            })
            .catch(console.error);
    } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
}

if (isMobile) {
    // Request permission to access device orientation data
    requestDeviceOrientationPermission();
} else {
    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
    });
}

/**
 * Animate
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
    if (isMobile) {
        // Apply orientation data to camera group on mobile
        const parallaxX = orientation.gamma / 90;  // Normalize gamma to [-1, 1]
        const parallaxY = orientation.beta / 90;   // Normalize beta to [-1, 1]

        cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
        cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 2 * deltaTime;
    } else {
        // Apply cursor movement to camera group on desktop
        const parallaxX = cursor.x * 0.5;
        const parallaxY = -cursor.y * 0.5;

        cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
        cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 2 * deltaTime;
    }
    
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

// Start the animation
tick();
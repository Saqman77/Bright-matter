import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'lil-gui';
import gsap from 'gsap';

const gui = new GUI();
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Galaxy Parameters
 */
const parameters = {
    count: 90000,
    size: 0.01,
    radius: 1.5,
    branches: 3,
    spin: 0,
    randomness: 0.5,
    randomnessPower: 10,
    insideColor: '#312eff',
    outsideColor: '#1b8360'
};

// Create an array for workers
const workers = [];
const workerCount = 4; // Number of workers

for (let i = 0; i < workerCount; i++) {
    const worker = new Worker('./generateGalaxyWorker.js');
    workers.push(worker);
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
            endIndex
        };

        worker.postMessage(workerParams);
    });

    workers.forEach(worker => {
        worker.onmessage = function(event) {
            const data = event.data;
            const positions = new Float32Array(data.positions);
            const colors = new Float32Array(data.colors);

            const startIndex = data.workerStartIndex * 3;
            const length = positions.length;

            if (checkForNaN(positions) || checkForNaN(colors)) {
                console.error("NaN values detected in worker data.");
                return;
            }
    

            // Ensure we are not setting out of bounds
            if (startIndex + length <= particlesGeometry.attributes.position.array.length) {
                particlesGeometry.attributes.position.array.set(positions, startIndex);
                particlesGeometry.attributes.color.array.set(colors, startIndex);
            } else {
                console.error("Data received from worker exceeds buffer size.");
                console.error('rcvd:',startIndex + length,'length accepted:',particlesGeometry.attributes.position.array.length,);
            }

            // Mark the attributes as needing updates
            particlesGeometry.attributes.position.needsUpdate = true;
            particlesGeometry.attributes.color.needsUpdate = true;

            completedWorkers++;
            if (completedWorkers === workerCount) {
                particlesMaterial = new THREE.PointsMaterial({
                    size: parameters.size,
                    sizeAttenuation: true,
                    depthWrite: false,
                    blending: THREE.AdditiveBlending,
                    vertexColors: true
                });

                particles = new THREE.Points(particlesGeometry, particlesMaterial);
                // particles.position.set(2,4,-3)
                scene.add(particles);
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
gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(generateGalaxy);
gui.add(parameters, 'size').min(0.001).max(2).step(0.001).onFinishChange(generateGalaxy);
gui.add(parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy);
gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy);
gui.add(parameters, 'spin').min(-5).max(5).step(0.001).onFinishChange(generateGalaxy);
gui.add(parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy);
gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy);

generateGalaxy();
// if(particles){
//     gsap.to(particles.rotation, {
//         duration: 1.5,
//         ease: 'power2.inOut',
//         x: '+=6',
//         y: '+=3',
//         z: '+=1.5'
//     });
// }




/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.set(3, 3, 3);
// camera.lookAt(100,4,0)
scene.add(camera);

gui.add(camera.position, 'x').min(-30).max(30).step(0.5)
gui.add(camera.position, 'y').min(-30).max(30).step(0.5)
gui.add(camera.position, 'z').min(-30).max(30).step(0.5)
// gui.add(camera.lookAt, 'x').min(-10).max(10).step(0.5)
// gui.add(camera.lookAt, 'y').min(-10).max(10).step(0.5)
// gui.add(camera.lookAt, 'z').min(-10).max(10).step(0.5)


// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

let scrollY = window.scrollY;
let currentSection = 0;

const debounce = (func, delay) => {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
};

let isUpdating = false;

const updateGalaxy = () => {
    if (!isUpdating) {
        isUpdating = true;
        generateGalaxy();
        setTimeout(() => {
            isUpdating = false;
        }, 31); // Adjust the delay as needed
    }
};


let direction = 0

// Scroll Update
window.addEventListener('scroll', debounce(() => {
    scrollY = window.scrollY;
    const newSection = Math.round(scrollY / sizes.height);
    
    if (newSection !== currentSection) {
        direction = newSection > currentSection ? 'down' : 'up';
        currentSection = newSection;

        // Animate galaxy parameters with GSAP
        gsap.to(parameters, {
            // count: direction === 'down' ? 450000 : 90000,
            ease: "power1.in",
            radius: direction === 'down' ? 5 : 1.5,
            spin: direction === 'down' ? 1 : 0,
            randomnessPower: direction === 'down' ? 3 : 10,
            duration: direction === 'down' ? 0.5 : 1,
            onStart:()=>{
                parameters.count = direction === 'down' ? 90000 : 40000
                generateGalaxy()
            },
            onComplete:()=> {
                parameters.count = direction === 'down' ? 450000 : 40000
                generateGalaxy()
            },
            onUpdate: updateGalaxy
            // onUpdateParams: [parameters.count]
        });


    }
}, 200));


/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    if (particles) {
        particles.rotation.y = elapsedTime * 0.05;
    }

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();

        // // Animate camera position





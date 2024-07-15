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
 * Subparticles
 */
// Geometry
const subcount = 2000;
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
    color: '#1b8360',
    size: 0.002,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
    transparent: true
});

// Points
const subparticle = new THREE.Points(subparticleGeometry, subparticleMaterial);


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
                console.error('Received:', startIndex + length, 'Length accepted:', particlesGeometry.attributes.position.array.length);
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
    debounceGenerateGalaxy(); // Debounced galaxy generation on resize
});

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.set(3, 4, 3);
subparticle.position.y = camera.position.y
scene.add(subparticle);

const cameraGroup = new THREE.Group();
scene.add(cameraGroup);
cameraGroup.add(camera);

gui.add(camera.position, 'x').min(-30).max(30).step(0.5);
gui.add(camera.position, 'y').min(-30).max(30).step(0.5);
gui.add(camera.position, 'z').min(-30).max(30).step(0.5);

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

const debounceGenerateGalaxy = debounce(generateGalaxy, 0.5);

let direction = 0;

let isScrollEventActive = true; // Flag to control the scroll event listener

window.addEventListener('scroll', debounce(() => {
     // Exit if the scroll event is disabled

    scrollY = window.scrollY;
    const newSection = Math.round(scrollY / sizes.height);
    if (!isScrollEventActive) return;
    if (Math.abs(newSection !== currentSection)) { // Trigger only if section changes significantly
        direction = newSection > currentSection ? 'down' : 'up';
        currentSection = newSection;

        // Animate galaxy parameters with GSAP
        gsap.to(parameters, {
            radius: direction === 'down' ? 5 : 1.5,
            spin: direction === 'down' ? 1 : 0,
            randomnessPower: direction === 'down' ? 3 : 10,
            duration: direction === 'down' ? 2 : 1,
            onStart: () => {
                parameters.count = direction === 'down' ? 100000 : 60000;
                generateGalaxy()
            },
            onComplete: () => {
                parameters.count = direction === 'down' ? 450000 : 90000;
                generateGalaxy()
            },
            onUpdate: debounceGenerateGalaxy
        });
        if(currentSection >= 1.5 )
        {isScrollEventActive = false;} // Disable the scroll event listener after the condition is met
    }
}, 200));

// Cursor
const cursor = { x: 0, y: 0 };

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
});

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

    // subparticle.position.x = Math.sin(elapsedTime) * 0.01;
    subparticle.position.z = Math.cos(elapsedTime) * 0.1;
    const cameraParallaxY = (- scrollY / sizes.height + 4) * 0.5;
    camera.position.y += (cameraParallaxY - camera.position.y) * 5 * deltaTime;

    // Animate camera
    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;

    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 2 * deltaTime;

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();

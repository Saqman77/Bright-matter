import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GUI } from 'lil-gui';
import gsap from 'gsap';

// const gui = new GUI();
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

//texture loader
const loader = new THREE.TextureLoader()
const startTexture = loader.load('./assets/images/textures/8.png')
const subTexture = loader.load('./assets/images/textures/4.png')

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
    outsideColor: '#1b8360',
    position:{x:0, y:2, z:0}
};

// Create an array for workers
const workers = [];
const workerCount = 4; // Number of workers

let xyz = {}

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
    const perf1 = performance.now();
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
                particlesMaterial = new THREE.PointsMaterial({
                    size: parameters.size,
                    alphaMap: startTexture,
                    transparent: true,
                    sizeAttenuation: true,
                    depthWrite: false,
                    blending: THREE.AdditiveBlending,
                    vertexColors: true
                });

                particles = new THREE.Points(particlesGeometry, particlesMaterial);
                xyz = particles.position.set(parameters.position.x, parameters.position.y, parameters.position.z);
                particles.rotation.y = 2
                xyz.needsUpdate = true;
                scene.add(particles);
                const perf2 = performance.now();
                console.log('time taken:', perf2 - perf1);
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
// gui.add(camera.rotation, 'x').min(-100).max(100).step(0.001).onFinishChange(generateGalaxy);
// gui.add(camera.rotation, 'y').min(-100).max(100).step(0.001).onFinishChange(generateGalaxy);
// gui.add(camera.rotation, 'z').min(-100).max(100).step(0.001).onFinishChange(generateGalaxy);

// Controls


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

const debounceGenerateGalaxy = debounce(generateGalaxy, 0.012);
const tl = gsap.timeline()
let direction = 0;

// let isScrollEventActive = true; // Flag to control the scroll event listener

window.addEventListener('scroll', debounce(() => {
     // Exit if the scroll event is disabled

    scrollY = window.scrollY;
    const newSection = Math.round(scrollY / sizes.height);
    
    if (newSection !== currentSection) { // Trigger only if section changes significantly
        direction = newSection > currentSection ? 'down' : 'up';
        currentSection = newSection;
        console.log(currentSection)
        
        // Animate galaxy parameters with GSAP
        if (currentSection <= 1 ) {
        gsap.to(parameters, {
            radius: direction === 'down' ? 5 : 1.5,
            spin: direction === 'down' ? 2 : 0,
            randomnessPower: direction === 'down' ? 4 : 10,
            duration: direction === 'down' ? 3 : 1,
            // branches: 4,
            onStart: () => {
                parameters.count = direction === 'down' ? 100000 : 10000;
                parameters.size = 0.05
                parameters.randomnessPower = 20
                parameters.randomness = 0
                // parameters.branches = direction === 'down' ? 5 : 3;
                debounceGenerateGalaxy
            },            
            onComplete: () => {
                parameters.count = direction === 'down' ? 450000 : 90000;
                parameters.size = direction === 'down' ? 0.01 : 0.01;
                // parameters.branches = direction === 'down' ? 5 : 3;
                debounceGenerateGalaxy
            },
            onUpdate: debounceGenerateGalaxy
        });

        gsap.to(camera.position,
            {
                x: direction === 'down' ? 0 : 0,
                z:direction === 'down' ? 4 : 4,
                y:direction === 'down' ? 4 : 6,
                ease:'power1.inOut',
                duration:3,
            })
        gsap.to(camera.rotation,
            {
                duration:3,
                ease:"power1.inOut",
                x:direction === 'down' ? -0.3: -0.767,
                z:direction === 'down' ? 0:0,
                y:direction === 'down' ? 0:0
            })
    }

    if(currentSection == 3)
        {
tl.to(camera.position,
    {
        x:direction === 'down' ? -6 : 0,
        y:direction === 'down' ? 12 : 4,
        z:direction === 'down' ? 0.5 : 4,
        ease:'power2.inOut',
        duration:2,
    })
tl.to(camera.rotation,
    {
        x:direction === 'down' ? -1.6 : -0.3,
        y:direction === 'down' ? 0 : 0,
        z:direction === 'down' ? 0 : 0,
        duration:2,
        ease:'power2.inOut'
    })}
// }
    if(currentSection == 4)
        {
tl.to(camera.position,
    {
        x:direction === 'down' ? 3.5 : 0,
        y:direction === 'down' ? 7 : 2,
        z:direction === 'down' ? 6.5 : 4,
        ease:'power2.inOut',
        duration:2,
    })
tl.to(camera.rotation,
    {
        x:direction === 'down' ? -0.93 : 11.097,
        y:direction === 'down' ? 0 : 0,
        z:direction === 'down' ? 0 : 0,
        ease:'power2.inOut',
        duration:1,
    })}
    if(currentSection == 5)
        {
tl.to(camera.position,
    {
        x:direction === 'down' ? -4.5: 3.5,
        y:direction === 'down' ? 3.5 : 7,
        z:direction === 'down' ? 1 : 6.5,
        ease:'power2.inOut',
        duration:2,
    })
tl.to(camera.rotation,
    {
        x:direction === 'down' ? - 0.895 : -0.93,
        y:direction === 'down' ? - 0.455 : 0,
        z:direction === 'down' ? - 0.347 : 0,
        ease:'power2.inOut',
        duration:1,
    })}
    if(currentSection == 6)
        {
tl.to(camera.position,
    {
        x:direction === 'down' ? 2: -4.5,
        y:direction === 'down' ? 2 : 3.5,
        z:direction === 'down' ? 0 : 1,
        ease:'power2.inOut',
        duration:2,
    })
tl.to(camera.rotation,
    {
        x:direction === 'down' ? 0 : - 0.895,
        y:direction === 'down' ? 2 : - 0.455,
        z:direction === 'down' ? 0: - 0.347,
        ease:'power2.inOut',
        duration:1,
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
    if(currentSection == 7)
        // {
            {
                tl.to(camera.position,
                    {
                        x:direction === 'down' ? -5: 2,
                        y:direction === 'down' ? 2 : 2,
                        z:direction === 'down' ? -1 : 0,
                        ease:'power2.inOut',
                        duration:2,
                    })
                tl.to(camera.rotation,
                    {
                        x:direction === 'down' ? 0 : 0,
                        y:direction === 'down' ? -9 : 2 ,
                        z:direction === 'down' ? 0: 0,
                        ease:'power2.inOut',
                        duration:1,
                    })}

        
            
    }
}, 500));

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
    subparticle.position.x = Math.cos(elapsedTime) * 0.05 + camera.position.x
    subparticle.position.z = Math.sin(elapsedTime) * 0.05 + camera.position.z - 5
    subparticle.position.y = Math.sin(elapsedTime) * 0.05 + camera.position.y

    // subparticle.scale.x = Math.sin(elapsedTime)* 0.05
    // subparticle.scale.y = Math.sin(elapsedTime)* 0.05
    // subparticle.scale.z = Math.cos(elapsedTime) * 0.05

    const cameraParallaxY = (- scrollY / sizes.height + 4) * 0.5;
    if(currentSection){
   if (currentSection <= 2 && currentSection >= 8){
    camera.position.y += (cameraParallaxY - camera.position.y+4) * 0.5 * deltaTime;
   }}

    // Animate camera
    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;

    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 2 * deltaTime;

    
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();

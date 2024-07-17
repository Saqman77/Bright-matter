importScripts('./libs/three.min.js');

self.onmessage = function(event) {
    const parameters = event.data;
    const { maxRadius, branches, spin, randomnessPower, insideColor, outsideColor, startIndex, endIndex, workerIndex } = parameters;

    const positions = new Float32Array((endIndex - startIndex) * 3);
    const colors = new Float32Array((endIndex - startIndex) * 3);

    const colorInside = new THREE.Color(insideColor);
    const colorOutside = new THREE.Color(outsideColor);
    
    for (let i = startIndex; i < endIndex; i++) {
        const arrayIndex = i - startIndex;
        const i3 = arrayIndex * 3;
        const radius = Math.random() * maxRadius;

        const spinAngle = radius * spin;
        const branchAngle = (i % branches) / branches * Math.PI * 2;

        const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
        const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
        const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1);

        positions[i3] = Math.sin(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.cos(branchAngle + spinAngle) * radius + randomZ;

        const mixedColour = colorInside.clone();
        mixedColour.lerp(colorOutside, radius / maxRadius);

        colors[i3] = mixedColour.r;
        colors[i3 + 1] = mixedColour.g;
        colors[i3 + 2] = mixedColour.b;
    }

    self.postMessage({ positions, colors, workerIndex }, [positions.buffer, colors.buffer]);
};
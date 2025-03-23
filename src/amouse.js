export const mouse = {
    x: null,
    y: null,
    hasMoved: false,
};

// Global mousemove event listener
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", (event) => {
        if (!mouse.hasMoved) {
            mouse.hasMoved = true;
        }
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
});

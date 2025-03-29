export const mouse = {
    x: null,
    y: null,
    hasMoved: false,
};

// Global mousemove event listener
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 1250)  
    {document.addEventListener("mousemove", (event) => {
        if (!mouse.hasMoved) {
            mouse.hasMoved = true;
        }
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });}else{
        document.addEventListener("touchmove", (e) => {
            const touch = e.touches[0]; // Get the first touch point
            mouse.x = touch.clientX;
            mouse.y = touch.clientY;
        });
    }
});

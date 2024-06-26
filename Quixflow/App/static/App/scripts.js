document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector("h1");
    textElement.style.opacity = 0;
    let opacity = 0;
    const fadeIn = () => {
        if (opacity < 1) {
            opacity += 0.01;
            textElement.style.opacity = opacity;
            requestAnimationFrame(fadeIn);
        }
    };
    fadeIn();
});

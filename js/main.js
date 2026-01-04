/*
  Designed by @mvttrb
*/

document.addEventListener("DOMContentLoaded", () => {
    fakeTerminalNoise();
    startBannerTremor();
});

function fakeTerminalNoise() {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach(block => {
        block.addEventListener("mouseenter", () => {
            block.style.textShadow = "0 0 8px #00ff00";
        });

        block.addEventListener("mouseleave", () => {
            block.style.textShadow = "none";
        });
    });
}

function startBannerTremor() {
    const banner = document.getElementById("banner");
    if (!banner) return;

    setInterval(() => {
        const x = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        const y = Math.floor(Math.random() * 3) - 1;

        banner.style.transform = `translate(${x}px, ${y}px)`;
    }, 120);
}
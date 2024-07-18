document.addEventListener("DOMContentLoaded", () => {
const marquee = document.querySelector(".marquee");
const marqueeContent = document.querySelector(".marquee-content");

const clone = marqueeContent.cloneNode(true);
marquee.appendChild(clone);

const totalWidth = marqueeContent.scrollWidth;
const animationDuration = totalWidth / 40;

marqueeContent.style.animationDuration = `${animationDuration}s`;
clone.style.animationDuration = `${animationDuration}s`;
});
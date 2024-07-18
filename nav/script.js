document.addEventListener('DOMContentLoaded', nav);

function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navSection = document.querySelector('.nav-section');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        navSection.classList.toggle('show');
    })
}

window.addEventListener("scroll", function () {
    let header = document.querySelector(".nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})
document.addEventListener('DOMContentLoaded', nav);

function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

window.addEventListener("scroll", function () {
    let header = document.querySelector(".nav")
    header.classList.toggle("sticky", window.scrollY > 0)
})
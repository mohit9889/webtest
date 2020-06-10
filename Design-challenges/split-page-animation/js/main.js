const split = document.querySelector(".split-container");
const blue = document.querySelector(".blue");
const orange = document.querySelector(".orange");

blue.addEventListener("mouseenter", () => {
    split.classList.add('hover-blue');
})

blue.addEventListener("mouseleave", () => {
    split.classList.remove('hover-blue');
})

orange.addEventListener("mouseenter", () => {
    split.classList.add('hover-orange');
})

orange.addEventListener("mouseleave", () => {
    split.classList.remove('hover-orange');
})
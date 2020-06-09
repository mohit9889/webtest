const readButton = document.getElementById('read_content_switch');
const backButton = document.getElementById('back_content_switch');
const imgSection = document.getElementById('img_section');
const pagesSection = document.getElementById('pages_section');

window.addEventListener("load", () => {
    var tl = new TimelineMax();

    tl.staggerFrom('h2', 0.8, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
    }, 0.5)

    tl.staggerFrom('span', 0.5, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
    }, 0.2, "-=1")

    tl.staggerFrom('button', 0.8, {
        opacity: 0
    }, 0.2, "-=0.5")
});

readButton.addEventListener("click", () => {
    imgSection.style.display = "none";
    //pagesSection.style.display = "block";
    TweenLite.fromTo (pagesSection , 0.3, {opacity:0}, {opacity:1,display:'block'})  

    var tl = new TimelineMax();

    tl.staggerFrom('button', 0.8, {
        opacity: 0
    }, 0.2)

    tl.staggerFrom('h2', 0.8, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
    }, 0.5, "-=1")

    tl.staggerFrom('span', 0.5, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
    }, 0.2, "-=1")

    tl.staggerFrom('.paragraphs', 1, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
    }, 0.8, "-=1")
});

backButton.addEventListener("click", () => {
    imgSection.style.display = "block";
    pagesSection.style.display = "none";

    var tl = new TimelineMax();

    tl.staggerFrom('h2', 0.8, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
    }, 0.5)

    tl.staggerFrom('span', 0.5, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
    }, 0.2, "-=1")

    tl.staggerFrom('button', 0.8, {
        opacity: 0
    }, 0.2, "-=0.5")
});
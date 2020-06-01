const tl = new TimelineMax();

tl.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

tl.to(".overlay", 2, {
    delay: 0.5,
    top: "-100%",
    ease: Expo.easeInOut
})

tl.from(".logo", 1, {
    opacity:0, y: 20, ease: Expo.easeInOut
})

tl.staggerFrom("nav ul li", 1, {
    opacity:0, y: 20, ease: Expo.easeInOut
}, "=2")


tl.staggerFrom(".social ul li", 1, {
    opacity:0, y: 20, ease: Expo.easeInOut
}, 0.2)

tl.from(".side-line", 2, {
    opacity: 0, y: 40, ease: Expo.easeInOut
})

tl.from(".heading h1", 2, {
    opacity: 0, y: 20, ease: Expo.easeInOut
},"-=1.5")

tl.from(".heading p", 2, {
    opacity: 0, y: 20, ease: Expo.easeInOut
},"-=1.5")

tl.from(".heading button", 2, {
    opacity: 0, y: 20, ease: Expo.easeInOut
},"-=1.5")
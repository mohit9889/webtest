const scene = document.getElementById('scene');
const parallax = new Parallax(scene);

var tl = new TimelineMax();

tl.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

tl.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.05)

tl.from(".search", 1, {
    delay: 0.3,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

tl.from(".account", 1, {
    delay: 0.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

tl.from(".cart", 1, {
    delay: 0.5,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".juice-image", 1, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(1)", 2, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(2)", 2, {
    delay: 2.1,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(3)", 2, {
    delay: 2.2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(4)", 2, {
    delay: 2.3,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(5)", 2, {
    delay: 2.5,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".title", 1, {
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from("h3", 1, {
    delay: 1.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".counter", 1, {
    delay: 1.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".more", 1, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".paragraphs", 1, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".arrow-button", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
  })
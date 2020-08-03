$('.home-slider').owlCarousel({
	loop: true,
	autoplay: true,
	margin: 0,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	nav: true,
	autoplayHoverPause: false,
	items: 1,
	navText: ["<p>Forward</p>", "<p>Next</p>"],
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});



var scrollFx = new (require('./scrollfx'))(),
	$ = require('elements');

scrollFx.add({
	el: $('.mood-bg'),
	posStart: 0,
	posEnd: window.innerHeight,
	styles: {
		transform: ['translateY(0%)', 'translateY(25%)']
	}
});
scrollFx.add({
	el: $('.mission'),
	posStart: 0,
	posEnd: window.innerHeight,
	styles: {
		transform: ['translateY(0px)', 'translateY(300px)'],
		opacity: [1, 0.3]
	}
});


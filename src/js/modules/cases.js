'use strict';

var Slides = require('slides-js');

new Slides(document.querySelector('.cases .slides'), {
	slideSelector: '.slides-contents article',
	navSelector: '.slides-tabs a',
	loop: false,
	hover: true,
	transitionOptions: {duration: 1000}
});

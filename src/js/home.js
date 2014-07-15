'use strict';

var $ = require('elements');

var scrollTop = function(){
	return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

var header = $('.header-main'),
	sections = $('.page'),
	bodyRect = document.body.getBoundingClientRect(),
	headers = [], sectionTops = [], i, clone, sectionRect, y,
	body = document.body, timer;

for (i = 0; i < sections.length; i++){
	clone = $(header[0].cloneNode(true));
	headers.push(clone);
	clone.insert(sections[i]);

	sectionRect = sections[i].getBoundingClientRect();
	sectionTops.push(sectionRect.top - bodyRect.top);
}

header.style({display: 'none'});

$(window).on('scroll', function(){
	clearTimeout(timer);

	if(!body.classList.contains('disable-pointer')) {
		body.classList.add('disable-pointer');
	}

	timer = setTimeout(function(){
		body.classList.remove('disable-pointer');
	},500);

	y = scrollTop();
	for (i = 0; i < sections.length; i++){
		headers[i].style({transform: 'translateY(' + (y - sectionTops[i]) + 'px)'});
	}
});

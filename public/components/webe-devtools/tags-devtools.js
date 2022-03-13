//= Tag Generator for the webe-devtools web component in webe_fc (::GUARDING MODULARITY::) =\\

'use strict';

import { section_slider } from './webe-devtools.js';

export const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

export const createTags = () => {
	const head = document.querySelector('head');
	// const script = document.createElement('script');
	const link = document.createElement('link');
	const linkSlider = document.createElement('link');
	const divOne = document.createElement('div');
	const divTwo = document.createElement('div');
	const divThree = document.createElement('div');
	const divFour = document.createElement('div');
	const divFive = document.createElement('div');
	const imgOne = document.createElement('img');
	const imgTwo = document.createElement('img');
	const imgThree = document.createElement('img');
	const imgFour = document.createElement('img');
	const imgFive = document.createElement('img');
	const divInfoOne = document.createElement('div');
	const divInfoTwo = document.createElement('div');
	const divInfoThree = document.createElement('div');
	const divInfoFour = document.createElement('div');
	const divInfoFive = document.createElement('div');
	const h2One = document.createElement('h2');
	const h2Two = document.createElement('h2');
	const h2Three = document.createElement('h2');
	const h2Four = document.createElement('h2');
	const h2Five = document.createElement('h2');
	const pOne = document.createElement('p');
	const pTwo = document.createElement('p');
	const pThree = document.createElement('p');
	const pFour = document.createElement('p');
	const pFive = document.createElement('p');
	const divNav = document.createElement('div');
	const i_one = document.createElement('i');
	const i_two = document.createElement('i');
	const divNavVisibility = document.createElement('div');
	const divSlideIconOne = document.createElement('div');
	const divSlideIconTwo = document.createElement('div');
	const divSlideIconThree = document.createElement('div');
	const divSlideIconFour = document.createElement('div');
	const divSlideIconFive = document.createElement('div');

	setAttributes(link, {
		rel: 'stylesheet',
		href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
		type: 'text/css',
		crossorigin: 'anonymous',
	});

	setAttributes(linkSlider, {
		rel: 'stylesheet',
		href: '../components/webe-devtools/webe-devtools.css',
		type: 'text/css',
		crossorigin: 'anonymous',
	});

	setAttributes(divOne, {
		id: 'slideOne',
		class: 'slide active',
		alt: 'Slide Div for image',
	});
	setAttributes(divTwo, {
		id: 'slideTwo',
		class: 'slide',
		alt: 'Slide Div for image',
	});
	setAttributes(divThree, {
		id: 'slideThree',
		class: 'slide',
		alt: 'Slide Div for image',
	});
	setAttributes(divFour, {
		id: 'slideFour',
		class: 'slide',
		alt: 'Slide Div for image',
	});
	setAttributes(divFive, {
		id: 'slideFive',
		class: 'slide',
		alt: 'Slide Div for image',
	});

	setAttributes(imgOne, {
		id: 'img-one',
		class: 'img',
		src: '../components/webe-devtools/img_webe-devtools/int_app_basic.png',
		alt: 'Picture of Application Package in an Image element',
	});
	setAttributes(imgTwo, {
		id: 'img-two',
		class: 'img',
		src: '../components/webe-devtools/img_webe-devtools/2.jpg',
		alt: 'Picture of Application Package in an Image element',
	});
	setAttributes(imgThree, {
		id: 'img-three',
		class: 'img',
		src: '../components/webe-devtools/img_webe-devtools/3.jpg',
		alt: 'Picture of Application Package in an Image element',
	});
	setAttributes(imgFour, {
		id: 'img-four',
		class: 'img',
		src: '../components/webe-devtools/img_webe-devtools/4.jpg',
		alt: 'Picture of Application Package in an Image element',
	});
	setAttributes(imgFive, {
		id: 'img-five',
		class: 'img',
		src: '../components/webe-devtools/img_webe-devtools/5.jpg',
		alt: 'Picture of Application Package in an Image element',
	});

	setAttributes(divInfoOne, {
		id: 'info-one',
		class: 'info',
		alt: 'Info Div for image',
	});
	setAttributes(divInfoTwo, {
		id: 'info-two',
		class: 'info',
		alt: 'Info Div for image',
	});
	setAttributes(divInfoThree, {
		id: 'info-three',
		class: 'info',
		alt: 'Info Div for image',
	});
	setAttributes(divInfoFour, {
		id: 'info-four',
		class: 'info',
		alt: 'Info Div for image',
	});
	setAttributes(divInfoFive, {
		id: 'info-five',
		class: 'info',
		alt: 'Info Div for image',
	});

	setAttributes(h2One, {
		id: 'h2-one',
		class: 'h2',
		alt: 'h2 tag with title for image',
		dataset: 'internet-app-basic',
		innerHTML: 'Display Data',
	});
	setAttributes(h2Two, {
		id: 'h2-two',
		class: 'h2',
		alt: 'h2 tag with title for image',
		dataset: 'int-app-Standard',
		innerHTML: 'Display Data',
	});
	setAttributes(h2Three, {
		id: 'h2-three',
		class: 'h2',
		alt: 'h2 tag with title for image',
		dataset: 'int-app-Premium',
		innerHTML: 'Display Data',
	});
	setAttributes(h2Four, {
		id: 'h2-four',
		class: 'h2',
		alt: 'h2 tag with title for image',
		dataset: 'int-app-Ultimate',
		innerHTML: 'Display Data',
	});
	setAttributes(h2Five, {
		id: 'h2-five',
		class: 'h2',
		alt: 'h2 tag with title for image',
		dataset: 'int-app-advanced',
		innerHTML: 'Display Data',
	});

	setAttributes(pOne, {
		id: 'p-one',
		class: 'p',
		alt: 'p tag with description for image',
	});
	setAttributes(pTwo, {
		id: 'p-two',
		class: 'p',
		alt: 'p tag with description for image',
	});
	setAttributes(pThree, {
		id: 'p-three',
		class: 'p',
		alt: 'p tag with description for image',
	});
	setAttributes(pFour, {
		id: 'p-four',
		class: 'p',
		alt: 'p tag with description for image',
	});
	setAttributes(pFive, {
		id: 'p-five',
		class: 'p',
		alt: 'p tag with description for image',
	});

	setAttributes(divNav, {
		id: 'navigation',
		class: 'navigation',
		alt: 'Navigation Div for image',
	});
	setAttributes(i_one, {
		id: 'i-one',
		class: 'fas fa-chevron-left prev-btn',
		alt: 'Previous Button',
	});
	setAttributes(i_two, {
		id: 'i-two',
		class: 'fas fa-chevron-right next-btn',
		alt: 'Next Button',
	});

	setAttributes(divNavVisibility, {
		id: 'navigation-visibility',
		class: 'navigation-visibility',
		alt: 'Navigation Visibility Div for image',
	});
	setAttributes(divSlideIconOne, {
		id: 'slide-icon-one',
		class: 'slide-icon active',
		alt: 'Slide Icon Div for image',
	});
	setAttributes(divSlideIconTwo, {
		id: 'slide-icon-two',
		class: 'slide-icon',
		alt: 'Slide Icon Div for image',
	});
	setAttributes(divSlideIconThree, {
		id: 'slide-icon-three',
		class: 'slide-icon',
		alt: 'Slide Icon Div for image',
	});
	setAttributes(divSlideIconFour, {
		id: 'slide-icon-four',
		class: 'slide-icon',
		alt: 'Slide Icon Div for image',
	});
	setAttributes(divSlideIconFive, {
		id: 'slide-icon-five',
		class: 'slide-icon',
		alt: 'Slide Icon Div for image',
	});

	const RenderTags = () => {
		head.appendChild(link);
		section_slider.appendChild(divOne);
		section_slider.appendChild(divTwo);
		section_slider.appendChild(divThree);
		section_slider.appendChild(divFour);
		section_slider.appendChild(divFive);
		divOne.appendChild(imgOne);
		divOne.appendChild(divInfoOne);
		divInfoOne.appendChild(h2One);
		divInfoOne.appendChild(pOne);
		divTwo.appendChild(imgTwo);
		divTwo.appendChild(divInfoTwo);
		divInfoTwo.appendChild(h2Two);
		divInfoTwo.appendChild(pTwo);
		divThree.appendChild(imgThree);
		divThree.appendChild(divInfoThree);
		divInfoThree.appendChild(h2Three);
		divInfoThree.appendChild(pThree);
		divFour.appendChild(imgFour);
		divFour.appendChild(divInfoFour);
		divInfoFour.appendChild(h2Four);
		divInfoFour.appendChild(pFour);
		divFive.appendChild(imgFive);
		divFive.appendChild(divInfoFive);
		divInfoFive.appendChild(h2Five);
		divInfoFive.appendChild(pFive);
		section_slider.appendChild(divNav);
		divNav.appendChild(i_one);
		divNav.appendChild(i_two);
		section_slider.appendChild(divNavVisibility);
		divNavVisibility.appendChild(divSlideIconOne);
		divNavVisibility.appendChild(divSlideIconTwo);
		divNavVisibility.appendChild(divSlideIconThree);
		divNavVisibility.appendChild(divSlideIconFour);
		divNavVisibility.appendChild(divSlideIconFive);
	};
	RenderTags();
};

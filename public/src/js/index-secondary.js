'use strict';

import { head, body, setAttributes } from './webeLibrary.js';

const init = () => {
	const RenderWebComponents = () => {
		const h1SubTitle = document.createElement('h1');
		setAttributes(h1SubTitle, {
			class: 'h1-subtitle',
			alt: 'H1 Sub Title for Image',
		});
		body.appendChild(h1SubTitle);
		h1SubTitle.innerHTML = `You need Software for your Internet Business?
        <br>
        <br>
          HOOT Webelistic's<sup class="sup">&#174;</sup> delivers professionally Branded Applications! 
        <br>
        <br>
        Intuitively Designed & Developed specifically for your Business' needs!`;

		const imageRight = document.createElement('img');
		setAttributes(imageRight, {
			id: 'image-right',
			class: 'image-right',
			src: '../src/img/software_logos/tallJS.png',
			crossorigin: 'anonymous',
			alt: 'javascript logo',
		});
		body.appendChild(imageRight);

		const imageRightUnder = document.createElement('img');
		setAttributes(imageRightUnder, {
			id: 'image-right-under',
			class: 'image-right-under',
			src: '../src/img/software_logos/css-3.png',
			alt: 'Image for CSS "Cascading Style Sheet"!',
		});
		body.appendChild(imageRightUnder);

		const imageMiddleUnder = document.createElement('img');
		setAttributes(imageMiddleUnder, {
			id: 'image-middle-under',
			class: 'image-middle-under',
			src: '../src/img/software_logos/html_tall.png',
			alt: 'Image for HTML "Hyper Text Markup Language"!',
		});
		body.appendChild(imageMiddleUnder);

		const webeHeaderScript = () => {
			const script = document.createElement('script');
			const webeHeader = document.createElement('webe-header');
			setAttributes(script, {
				type: 'module',
				src: '../components/webe-header/webe-header.js',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			// going to import the CSS module from inside component's JS module
			setAttributes(webeHeader, {
				id: 'webe-header',
				class: 'webe-header',
				alt: 'Web-Component Header',
			});
			head.appendChild(script);
			body.appendChild(webeHeader);
		};

		const webeNav = () => {
			const script = document.createElement('script');
			const webeNav = document.createElement('webe-nav');
			setAttributes(script, {
				type: 'module',
				src: '../components/webe-nav/webe-nav.js',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			setAttributes(webeNav, {
				id: 'webe-nav',
				class: 'webe-nav',
				alt: 'Web-Component Nav',
			});
			head.appendChild(script);
			body.appendChild(webeNav);
		};

		const webeImageRolloutScript = () => {
			const script = document.createElement('script');
			const imageRollout = document.createElement('webe-image-rollout');
			setAttributes(script, {
				type: 'module',
				src: '../components/webe-image-rollout/webe-image-rollout.js',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			setAttributes(imageRollout, {
				id: 'webe-image-rollout',
				class: 'webe-image-rollout',
				alt: 'Image Component on Home Page',
			});
			head.appendChild(script);
			body.appendChild(imageRollout);
		};

		webeHeaderScript();
		webeNav();
		webeImageRolloutScript();
	};
	RenderWebComponents();
};

document.addEventListener('DOMContentLoaded', init);

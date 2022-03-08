//@ :::: HOOT Webelistics®  Web Application Development  :::: @//
//@ :::: Gordon R. Mullen Jr  'Date: 2022/01/20'   :::: @//

//~ :::: Main Application Index.js File :::: ~//

'use strict';

import { head, body, setAttributes } from './webeLibrary.js';

const init = () => {
	const RenderWebComponents = () => {
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
		// const webeSearch = () => {
		// 	const script = document.createElement('script');
		// 	const webeSearch = document.createElement('webe-search');
		// 	setAttributes(script, {
		// 		type: 'module',
		// 		src: '../components/webe-search/webe-search.js',
		// 		content: 'text/javascript',
		// 		crossorigin: 'anonymous',
		// 	});
		// 	head.appendChild(script);
		// 	setAttributes(webeSearch, {
		// 		id: 'webe-search',
		// 		class: 'webe-search',
		// 		alt: 'Web-Component Search',
		// 	});
		// 	body.appendChild(webeSearch);
		// };

		const webeNavScript = () => {
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

		// const owlScript = () => {
		// 	const script = document.createElement('script');
		// 	setAttributes(script, {
		// 		type: 'module',
		// 		src: '/src/js/owlMeter.js',
		// 		content: 'text/javascript',
		// 		crossorigin: 'anonymous',
		// 	});

		// 	head.appendChild(script);
		// };

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

		// const batchCubeScript = () => {
		// 	const script = document.createElement('script');
		// 	const batchCube = document.createElement('batch-cube');
		// 	setAttributes(script, {
		// 		type: 'module',
		// 		content: 'text/javascript',
		// 		crossorigin: 'anonymous',
		// 	});
		// 	setAttributes(batchCube, {
		// 		id: 'batch-cube',
		// 		class: 'batch-cube',
		// 		alt: 'Home Data Modal',
		// 	});
		// 	body.appendChild(script);
		// 	script.innerHTML = `import "../components/component_batching/batch-cube.js";`;
		// 	body.appendChild(batchCube);
		// };

		const webeResponsiveScript = () => {
			const script = document.createElement('script');
			setAttributes(script, {
				type: 'module',
				src: '../components/webe-responsive/webe-responsive.js',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			// going to import the CSS module from inside component's JS module
			const webeResponsive = document.createElement('webe-responsive');
			setAttributes(webeResponsive, {
				id: 'webe-responsive',
				class: 'webe-responsive',
				alt: 'SLideout Menu',
			});
			head.appendChild(script);
			body.appendChild(webeResponsive);
		};

		const toslideshowScript = () => {
			const script = document.createElement('script');
			const link = document.createElement('link');
			setAttributes(script, {
				type: 'module',
				src: '../components/webe-devtools/resources/research/toslideshow/toslideshow.js',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			setAttributes(link, {
				rel: 'stylesheet',
				href: '../components/webe-devtools/resources/research/toslideshow/toslideshow.css',
				content: 'text/css',
				crossorigin: 'anonymous',
			});
			head.appendChild(script, link);
		};

		const webeDevtoolsScript = () => {
			const script = document.createElement('script');
			setAttributes(script, {
				type: 'module',
				src: '../components/webe-devtools/webe-devtools.js',
				content: 'text/javascript',
				crossorigin: 'anonymous',
				alt: 'Script for webe-devtools Web Component',
			});
			const webeDevtools = document.createElement('webe-devtools');
			setAttributes(webeDevtools, {
				id: 'webe-devtools',
				class: 'webe-devtools',
				alt: 'webe-devtools Web Component,',
			});
			head.appendChild(script);
			body.appendChild(webeDevtools);
		};

		const webeCarouselScript = () => {
			const script = document.createElement('script');
			const webeCarousel = document.createElement('webe-carousel');
			setAttributes(script, {
				src: '../components/webe-carousel/webe-carousel.js',
				type: 'module',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			head.appendChild(script);
			// going to import the CSS module from inside component's JS module
			setAttributes(webeCarousel, {
				id: 'webe-carousel',
				class: 'webe-carousel',
			});
			body.appendChild(webeCarousel);
		};

		const webeFooterScript = () => {
			const script = document.createElement('script');
			const webeFooter = document.createElement('webe-footer');
			setAttributes(script, {
				type: 'module',
				src: '../components/webe-footer/webe-footer.js',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			// going to import the CSS module from inside component's JS module
			setAttributes(webeFooter, {
				id: 'webe-footer',
				class: 'webe-footer',
				alt: 'Page Footer',
			});
			head.appendChild(script);
			body.appendChild(webeFooter);
		};
		//- :::: Append the 'generated' HTML to the DOM :::: -//
		webeHeaderScript();
		webeNavScript();
		webeImageRolloutScript();
		// batchCubeScript();
		webeResponsiveScript();
		toslideshowScript();
		webeDevtoolsScript();
		webeCarouselScript();
		webeFooterScript();
		// webeSearch();
		// owlScript();
	};
	RenderWebComponents();
};

document.addEventListener('DOMContentLoaded', init);

// TESTING:

//- NOTES_LIST:
//%  Initialize and Integrate an 'entrance-point' between the front-end
//% (HTML-JavaScript-CSS) "init" application and the back-end
//% (Node.js-Express_Handlebars-MongoDB ) "Server.js" application
//% by loading DOM Tree and Component Elements into the 'server-side'
//% Handlebars middleware's "Layout Template" main.handlebars.

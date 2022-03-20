//todo :::: HOOT Webelistics®  Web Application Development  :::: todo//
//< :::: Gordon R. Mullen Jr  'Date: 2022/01/20'   :::: <//

// :::: Main Application Index.js File :::: //

'use strict';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const head = document.querySelector('head');
const scriptState = document.createElement('script');
setAttributes(scriptState, {
	type: 'module',
	src: '/state/indexPrimer.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});
head.appendChild(scriptState);

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

// const webeImageRolloutScript = () => {
// 	const script = document.createElement('script');
// 	const imageRollout = document.createElement('webe-image-rollout');
// 	setAttributes(script, {
// 		type: 'module',
// 		src: '../components/webe-image-rollout/webe-image-rollout.js',
// 		content: 'text/javascript',
// 		crossorigin: 'anonymous',
// 	});
// 	setAttributes(imageRollout, {
// 		id: 'webe-image-rollout',
// 		class: 'webe-image-rollout',
// 		alt: 'Image Component on Home Page',
// 	});
// 	head.appendChild(script);
// 	body.appendChild(imageRollout);
// };

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

// const webeCarouselScript = () => {
// 	const script = document.createElement('script');
// 	const webeCarousel = document.createElement('webe-carousel');
// 	setAttributes(script, {
// 		src: '../components/webe-carousel/webe-carousel.js',
// 		type: 'module',
// 		content: 'text/javascript',
// 		crossorigin: 'anonymous',
// 	});
// 	head.appendChild(script);
// 	// going to import the CSS module from inside component's JS module
// 	setAttributes(webeCarousel, {
// 		id: 'webe-carousel',
// 		class: 'webe-carousel',
// 	});
// 	body.appendChild(webeCarousel);
// };

// TESTING:

//- NOTES_LIST:
//todo :::: Integration of STATE MANAGEMENT into the app...
//<    :::: Create Component Class for "index.js" ::::    >//

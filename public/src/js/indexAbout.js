//todo :::: HOOT Webelistics®  Web Application Development  :::: todo//
//< :::: Gordon R. Mullen Jr  'Date: 2022/04/05'   :::: <//

// :::: Main webe_fc Application indexAbout.js File :::: //

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
	src: '/state/indexAboutPrimer.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});
head.appendChild(scriptState);

// TESTING:

//- NOTES_LIST:
//todo :::: Integration of STATE MANAGEMENT into the app...
//<    :::: Create Component Class for "index.js" ::::    >//

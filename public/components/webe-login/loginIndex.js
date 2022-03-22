'use strict';

const head = document.querySelector('head');

const setAttributes = (element, attributes) => {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
};

const script = document.createElement('script');
setAttributes(script, {
	type: 'module',
	src: '../components/webe-login/webe-login.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});

const link = document.createElement('link');
setAttributes(link, {
	rel: 'stylesheet',
	href: '../components/webe-login/webe-login.css',
	type: 'text/css',
	crossorigin: 'anonymous',
});
const title = document.createElement('title');
setAttributes(title, {
	textContent: 'webe-login',
});
head.appendChild(link);
head.appendChild(script);
head.appendChild(title);

//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    indexBlog    ::::::::::  )//

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
	src: '/state/indexBlogPrimer.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});
head.appendChild(scriptState);

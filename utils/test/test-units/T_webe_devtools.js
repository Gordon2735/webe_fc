// TEST HTML:
const init = () => {
	return window.open('href="/TEST"');
};

document.addEventListener('DOMContentLoaded', init);

const head = document.querySelector('head');
const body = document.querySelector('body');
const script = document.createElement('script');

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

setAttributes(script, {
	type: 'module',
	src: '../utils/test/test-units/T_webe_devtools.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});

head.appendChild(script);

const div = document.createElement('divTwo');
setAttributes(div, {
	class: 'slide',
});

body.appendChild(div);

export default div;

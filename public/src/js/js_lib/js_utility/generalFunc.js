//hw :::::::: HooT Webelistics® :::::::: hw//
//)  :::: General Function Utilities :::: )//

'use strict';

export const head = document.querySelector('head');
export const body = document.querySelector('body');

export const setAttributes = (element, attributes) => {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
};

export const renderHeadScripts = (scripts, renderNote) => {
	for (const script of scripts) {
		head.appendChild(script);
	}
	return renderNote;
};

export default function appendChildren(parent, children) {
	children.forEach(child => {
		parent.append(child);
	});
}

export const appender = (parent, children) => {
	children.map(child => {
		parent.append(child);
	});
};

export const listMaker = (list, element) => {
	list.forEach(item => {
		element.appendChild(item);
	});
};

export const loopList = (list_li, attribute, element) => {
	list_li.forEach(item_li => {
		const li = document.createElement('li');
		li.append(item_li);
		li.setAttribute('class', attribute);
		element.appendChild(li);
	});
};

export function signupToggle() {
	const container = this.shadowRoot.querySelector('.container');
	container.classList.toggle('active');
	const popup = this.shadowRoot.querySelector('.signup-form');
	popup.classList.toggle('active');
}
export function loginsToggle() {
	const container = this.shadowRoot.querySelector('.container');
	container.classList.toggle('active');
	const popup = this.shadowRoot.querySelector('.login-form');
	popup.classList.toggle('active');
}

// function css(el, styles) {
// 	for (var property in styles) el.style[property] = styles[property];
// }
// // example
// var el = document.querySelector('div');
// css(el, { background: 'green', display: 'none', 'border-radius': '5px' });

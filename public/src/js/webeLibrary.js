//= ::::  webe-devtools Application Library  :::: =\

'use strict';

export const head = document.querySelector('head');
export const body = document.querySelector('body');

export const setAttributes = (element, attributes) => {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
};

export const appendChildren = (parent, children) => {
	children.forEach(child => {
		parent.appendChild(child);
	});
};

export const listMaker = (list, element, ul) => {
	list.forEach(item => {
		element.appendChild(item);
		ul.appendChild(element);
	});
};

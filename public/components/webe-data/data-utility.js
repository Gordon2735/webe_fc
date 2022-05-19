//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::   data-utility   :::::::::  )//
//-  :::::::: Utility Functions ::::::::  -//

'use strict';

import { DataTemplateRenderer } from './data-TemplateRenderer.js';

export default async function appendChildren(parent, children) {
	await children.forEach(child => {
		parent.append(child);
	});
}

export const head = document.querySelector('head');
export const body = document.querySelector('body');

export const setAttributes = async (element, attributes) => {
	for (const key in attributes) {
		await element.setAttribute(key, attributes[key]);
	}
};

export const renderHeadScripts = (scripts, element, renderNote) => {
	for (const script of scripts) {
		element.appendChild(script);
	}
	return renderNote;
};

export const appender = async (parent, children) => {
	await children.map(child => {
		parent.append(child);
	});
};

export const listMaker = async (list, element) => {
	await list.forEach(item => {
		element.appendChild(item);
	});
};

export const loopList = async (list_li, attribute, element) => {
	await list_li.forEach((item_li, item_anchor) => {
		const li = document.createElement('li');
		li.append(item_li);
		li.setAttribute('class', attribute);
		element.appendChild(li);
	});
};

export const renderArray = async array => {
	await array.map(item => {
		return item;
	});
};

export class DataUtility extends DataTemplateRenderer {
	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();
		console.info(
			'%c This Web Component has || * FIRED * || data-utility.js is connected',
			'background: #222222; color: hsl(239, 97%, 77%);'
		);
	}
}
customElements.define('data-utility', DataUtility);

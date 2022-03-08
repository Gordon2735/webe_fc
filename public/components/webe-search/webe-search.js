'use strict';

import { setAttributes } from '../../src/js/webeLibrary.js';

const template = document.createElement('template');

const createElements = render => {
	const darkRender = render;
	const style = document.createElement('style');
	setAttributes(template, {
		id: 'webe-search',
		class: 'webe-search',
		alt: 'Web-Component Search',
	});
	setAttributes(style, {
		type: 'text/css',
		rel: 'stylesheet',
		alt: 'Style',
	});

	const RenderElements = shadowRender => {
		template.innerHTML = `
            <div class="search-wrapper">
                <label for="search">Search Users</label>
                <input type="search" id="search" data-search />
            </div>
            <div class="user-cards" data-user-cards-container></div>
            <template data-user-template>
                <div class="card">
                    <div class="header" data-header></div>
                    <div class="body" data-body></div>
                </div>
            </template>
        `;
		style.innerHTML = `@import "../components/webe-search/webe-search.css";`;
		shadowRender.appendChild(style);
	};
	RenderElements(darkRender);
};

class WebeSearch extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });

		console.info(
			'%c This Web Component has || * FIRED * || webe-search.js is connected',
			'background: #222222; color: #FFA500'
		);
	}
	connectedCallback() {
		const shadowBody = this.shadowRoot;
		createElements(shadowBody);
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		const userCardTemplate = this.shadowRoot.querySelector(
			'[data-user-template]'
		);
		const userCardContainer = this.shadowRoot.querySelector(
			'[data-user-cards-container]'
		);
		const searchInput = this.shadowRoot.querySelector('[data-search]');

		let users = [];

		searchInput.addEventListener('input', element => {
			const value = element.target.value.toLowerCase();
			users.forEach(user => {
				const isVisible =
					user.name.toLowerCase().includes(value) ||
					user.email.toLowerCase().includes(value);
				user.element.classList.toggle('hide', !isVisible);
			});
		});

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => {
				users = data.map(user => {
					const card =
						userCardTemplate.content.cloneNode(true).children[0];
					const header = card.querySelector('[data-header]');
					const body = card.querySelector('[data-body]');
					header.textContent = user.name;
					body.textContent = user.email;
					userCardContainer.append(card);
					return {
						name: user.name,
						email: user.email,
						element: card,
					};
				});
			});
	}
	disconnectedCallback() {
		// 	const searchInput = document.querySelector('[data-search]');
		// 	const userCardContainer = document.querySelector(
		// 		'[data-user-cards-container]'
		// 	);
		// 	const userTemplate = document.querySelector('[data-user-template]');
		// 	searchInput.removeEventListener('input');
		// 	userCardContainer.remove();
		// 	userTemplate.remove();
		// 	this.remove();
		// 	console.info(
		// 		'%c This Web Component has || * BEEN DESTROYED * || webe-search.js is disconnected',
		// 		'background: #222222; color: #FF0000'
		// 	);
	}
}

window.customElements.define('webe-search', WebeSearch);

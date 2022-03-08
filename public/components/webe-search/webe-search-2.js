'use strict';

import { setAttributes } from '../../src/js/webeLibrary.js';

const template = document.createElement('template');

const createElements = render => {
	const divContainer = document.createElement('div');
	const labelSearch = document.createElement('label');
	const inputSearch = document.createElement('input');
	const divUserCardsContainer = document.createElement('div');
	const userTemplate = document.createElement('template');
	const divCard = document.createElement('div');
	const divHeader = document.createElement('div');
	const divBody = document.createElement('div');
	const darkRender = render;
	const style = document.createElement('style');
	labelSearch.innerHTML = `Search Users`;

	setAttributes(divContainer, {
		class: 'search-container',
		id: 'search-container',
		alt: 'search-container',
	});
	setAttributes(labelSearch, {
		for: 'search,',
		alt: 'Search Users',
	});
	setAttributes(inputSearch, {
		type: 'search',
		id: `'search' data-search`,
		alt: 'Search Users input',
	});
	setAttributes(divUserCardsContainer, {
		class: 'user-cards-container',
		alt: 'User Cards Container',
	});
	setAttributes(userTemplate, {
		//add data-user-template
		id: 'user-template',
		class: 'user-template',
		alt: 'User Template',
	});
	setAttributes(divCard, {
		class: 'card',
		alt: 'Card',
	});
	setAttributes(divHeader, {
		class: 'card-header',
		alt: 'Card Header',
	});
	setAttributes(divBody, {
		class: 'card-body',
		alt: 'Card Body',
	});
	setAttributes(style, {
		type: 'text/css',
		rel: 'stylesheet',
		alt: 'Style',
	});

	const RenderElements = shadowRender => {
		userTemplate.innerHTML = `data-user-template`;
		style.innerHTML = `@import "../components/webe-search/webe-search.css";`;
		shadowRender.appendChild(style);
		shadowRender.appendChild(divContainer);
		divContainer.appendChild(labelSearch);
		divContainer.appendChild(inputSearch);
		shadowRender.appendChild(divUserCardsContainer);
		shadowRender.appendChild(userTemplate);
		userTemplate.appendChild(divCard);
		divCard.appendChild(divHeader);
		divCard.appendChild(divBody);
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
		shadowBody.appendChild(template.content.cloneNode(true));

		const userCardTemplate = document.querySelector('[data-user-template]');
		const userCardContainer = document.querySelector(
			'[data-user-cards-container]'
		);
		const searchInput = document.querySelector('[data-search]');

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
		const searchInput = document.querySelector('[data-search]');
		const userCardContainer = document.querySelector(
			'[data-user-cards-container]'
		);
		const userTemplate = document.querySelector('[data-user-template]');
		searchInput.removeEventListener('input');
		userCardContainer.remove();
		userTemplate.remove();
		this.remove();

		console.info(
			'%c This Web Component has || * BEEN DESTROYED * || webe-search.js is disconnected',
			'background: #222222; color: #FF0000'
		);
	}
}

window.customElements.define('webe-search', WebeSearch);

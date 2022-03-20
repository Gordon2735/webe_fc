'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

export default class List extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-items'),
		});
	}

	/**
	 * React to state changes and render the component's HTML
	 *
	 * @returns {void}
	 */
	render() {
		// const thiz = this;
		if (store.state.items.length === 0) {
			this.element.innerHTML = `<p class="no-items">You've done nothing yet 😢</p>`;
			return;
		}
		this.element.innerHTML = `
            <ul class="app__items">
                ${store.state.items
					.map(item => {
						return `
                        <li>${item}&nbsp; &nbsp;<button aria-label="Delete this item">x</button></li>
                    `;
					})
					.join('')}
            </ul>
        `;
		this.element.querySelectorAll('button').forEach((button, index) => {
			button.addEventListener('click', () => {
				store.dispatch('clearItem', { index });
			});
		});
	}
}

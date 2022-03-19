'use strict';

import Component from '../library/component.js';
import store from '../store/indexState.js';

export default class Count extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-count'),
		});
	}

	/**
	 * React to state changes and render the component's HTML
	 *
	 * @returns {void}
	 */
	render() {
		let suffix = store.state.items.length !== 1 ? 's' : '';
		let emoji = store.state.items.length > 0 ? '🙌' : '😢';

		// let emoji = store.state.items.length > 0 ? '&#x1f64c;' : '&#x1f622;';

		this.element.innerHTML = `
            <small>You've done</small>
            <span>${store.state.items.length}</span>
            <small>thing${suffix} today ${emoji}</small>
        `;
	}
}

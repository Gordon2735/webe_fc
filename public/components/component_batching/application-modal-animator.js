'use strict';

import { TemplateTender } from './template-tender.js';

export class ApplicationModalAnimator extends TemplateTender {
	connectedCallback() {
		super.connectedCallback();

		this.shadowRoot
			.querySelector('slot')
			.addEventListener('slotchange', () => this.animate());
	}

	animate() {
		const elements = this.querySelectorAll('application-modal');

		[...elements].map((modal, index) => {
			const animation = modal.animate(
				{
					opacity: [0, 1],
					transform: ['scale(0.8)', 'scale(1)'],
				},
				{
					duration: 250,
					iterations: 1,
					delay: 50 * index,
				}
			);

			animation.onfinish = () => (modal.style.opacity = 1);
		});
	}

	get template() {
		return `
        <style>
        :host {
            display: flex;
            flex-wrap: wrap;
            overflow-x: hidden;
        }

        ::slotted(profile-card) {
            transition: transform 0.2s ease-in-out;
        }

        ::slotted(profile-card:hover) {
            transform: scale(1.05);
            background: white;
            box-shadow: 0 2px 9px 1px rgba(0,0,0,0.2);
            border-radius: 3px;
        }
        </style>
        `;
	}
}

customElements.define('application-modal-animator', ApplicationModalAnimator);

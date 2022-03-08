'use strict';

import { TemplateTender } from './template-tender.js';
import { sharedStyles } from './shared-styles.js';

export class ApplicationModal extends TemplateTender {
	constructor() {
		super();

		this.addEventListener('click', () =>
			this.dispatchEvent(
				new CustomEvent('openDialog', {
					detail: this.applicationData,
					bubbles: true,
					composed: true,
				})
			)
		);
	}

	get template() {
		return `
            <style>
                :host {
                    padding: 50px;
                    margin: 2px;
                    background: #EEE;
                    width: calc(25% - 4px);
                    box-sizing: border-box;
                    cursor: pointer;
                    text-align: center;
                    display: block;
                    opacity: 0;
                }
                ${sharedStyles.modal}
            </style>

            ${
				this.applicationData
					? `
					<h1>${this.applicationData.app_name} </h1>
            		<h1>${this.applicationData.app_author}</h1>`
					: ''
			}
        `;
	}

	static get observedAttributes() {
		return ['app-data'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (newValue && name === 'app-data') {
			this.applicationData = JSON.parse(decodeURIComponent(newValue));
			this.removeAttribute('app-data');
		}

		this.render();
	}
}

customElements.define('application-modal', ApplicationModal);

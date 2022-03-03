'use strict';

import { TemplateTender } from './template-tender.js';
import { sharedStyles } from './shared-styles.js';
import './application-modal.js';
import './application-modal-animator.js';
import './application-dialog.js';

export class BatchCube extends TemplateTender {
	constructor() {
		super();

		this.noShadowRoot = true;
		this.addEventListener('openDialog', e => {
			this.querySelector('internet-dialog').open(e.detail);
		});
	}

	connectedCallback() {
		super.connectedCallback();
		this.getApplication();
	}

	async getApplication() {
		const applicationPromise = await fetch(
			'https://random-data-api.com/api/app/random_app?size=100'
		);
		const res = await applicationPromise.json();
		this.application = res.result;

		this.render();
	}

	get template() {
		return `
		<style>
			:root {
				--primary: rgb(33, 150, 243);
			}

			batch-cube {
				${sharedStyles.trbl}
				overflow-y: overlay;
			}
		</style>

		<internet-dialog></internet-dialog>

		<application-modal-animator>
			${
				!!this.application
					? this.application
							.map(
								app =>
									`<application-modal app-data=${encodeURIComponent(
										JSON.stringify(app)
									)}></application-modal>`
							)
							.join('')
					: ''
			}
		</application-modal-animator>
		
		`;
	}
}

customElements.define('batch-cube', BatchCube);

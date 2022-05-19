//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::     webe-data     ::::::::  )//

'use strict';

import { DataTemplateRenderer } from './data-TemplateRenderer.js';
import { dataSharedStyles } from './data-sharedStyles.js';
import main, { RenderingElements } from './data-index.js';

export class WebeData extends DataTemplateRenderer {
	constructor() {
		super();

		this.noShadow = false;

		console.info(
			'%c This Web Component has || * FIRED * || webe-data.js is connected',
			'background: transparent ; color: hsl(32, 83%, 54%);'
		);
		RenderingElements();
	}

	connectedCallback() {
		super.connectedCallback();
		const root = this.shadowRoot;

		//<  Render the Main Container of the tags to the DOM  >//
		root.appendChild(main);
	}
	get template() {
		return `

            <style>
                ${dataSharedStyles.main}
            </style>
           `;
	}
}
customElements.define('webe-data', WebeData);

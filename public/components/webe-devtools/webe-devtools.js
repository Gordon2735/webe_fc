import { template, createTags } from './tags-devtools.js';
import './tags-devtools.js';

class WebeDevtools extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		console.info(
			'%c This Web Component has || * FIRED * || webe-devtools.js is connected',
			'background: #222222; color: #EE82EE'
		);
		const shadowBody = this.shadowRoot;
		createTags(shadowBody);

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	disconnectedCallback() {}
}

window.customElements.define('webe-devtools', WebeDevtools);

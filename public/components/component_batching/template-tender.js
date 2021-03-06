'use strict';

export class TemplateTender extends HTMLElement {
	connectedCallback() {
		if (!this.noShadowRoot) this.attachShadow({ mode: 'open' });
		this.render();
	}

	render(template) {
		if (this.noShadowRoot) {
			this.innerHTML = template || this.template;
		} else {
			this.shadowRoot.innerHTML = template || this.template;
		}
	}
}

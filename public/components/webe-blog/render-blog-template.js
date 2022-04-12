//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::  RenderTemplate   ::::::::  )//

'use strict';

export class RenderBlogTemplate extends HTMLElement {
	connectedCallback() {
		if (!this.noShadow) this.attachShadow({ mode: 'open' });
		this.render();
	}

	render(template) {
		if (this.noShadow) {
			this.innerHTML = template || this.template;
			return;
		} else {
			this.shadowRoot.innerHTML = template || this.template;
		}
	}
}

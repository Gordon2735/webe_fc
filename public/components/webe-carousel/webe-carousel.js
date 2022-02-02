'use strict';

const setAttributes = (tag, attributes) => {
	for (let key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const template = document.createElement('template');
setAttributes(template, {
	id: 'webe-carousel-template',
	class: 'webe-carousel-template',
});

const RenderTemplate = data => {
	let html = `
        <div class="webe-carousel-container">
            <div class="webe-carousel-slider">
                <div class="webe-carousel-slider-container">
                    <div class="webe-carousel-slider-item">
                        <div class="webe-carousel-slider-item-image">
                            <img src="${data.image}" alt="${data.alt}">
                        </div>
                        <div class="webe-carousel-slider-item-content">
                            <div class="webe-carousel-slider-item-content-title">
                                <h2>${data.title}</h2>
                            </div>
                            <div class="webe-carousel-slider-item-content-description">
                                <p>${data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="webe-carousel-navigation">
                <div class="webe-carousel-navigation-container">
                    <div class="webe-carousel-navigation-item">
                        <div class="webe-carousel-navigation-item-image">
                            <img src="${data.image}" alt="${data.alt}">
                        </div>
                        <div class="webe-carousel-navigation-item-content">
                            <div class="webe-carousel-navigation-item-content-title">
                                <h2>${data.title}</h2>
                            </div>
                            <div class="webe-carousel-navigation-item-content-description">
                                <p>${data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
	template.innerHTML = html;
	return template.content.cloneNode(true);
};

class WebeCarousel extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(RenderTemplate(this.data));
	}

	get data() {
		return {
			image: this.getAttribute('image'),
			alt: this.getAttribute('alt'),
			title: this.getAttribute('title'),
			description: this.getAttribute('description'),
		};
	}
	connectedCallback() {
		const style = document.createElement('style');
		setAttributes(style, {
			id: 'webe-carousel-style',
			class: 'webe-carousel-style',
			type: 'text/css',
			rel: 'stylesheet',
		});
		style.innerHTML = `@import "../components/webe-carousel/webe-carousel.css";`;
		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(RenderTemplate(this.data));
		customElements.define('webe-carousel', WebeCarousel);
	}
	disconnectedCallback() {
		this.shadowRoot.removeChild(this.shadowRoot.querySelector('style'));
		this.shadowRoot.removeChild(
			this.shadowRoot.querySelector('#webe-carousel-template')
		);
	}
}

window.customElements.define('webe-carousel', WebeCarousel);

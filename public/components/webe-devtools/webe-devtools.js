import { setAttributes, createTags } from './tags-devtools.js';

export const section_slider = document.createElement('section');
const imgSlider = document.createElement('img');

const template = document.createElement('template');
const scriptTags = document.createElement('script');
const style = document.createElement('style');

setAttributes(template, {
	id: 'template',
	class: 'template',
	alt: 'Web Component Template for rendering the webe-devtools component element.',
});

setAttributes(style, {
	rel: 'stylesheet',
	href: '../components/webe-devtools/webe-devtools.css',
	type: 'text/css',
	crossorigin: 'anonymous',
});

setAttributes(scriptTags, {
	type: 'module',
	src: '../components/webe-devtools/tags-devtools.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});

setAttributes(section_slider, {
	id: 'section-slider',
	class: 'section-slider',
	alt: 'Slider Container: Section Element on the webe-devtools Web Component HTML Page!',
});

setAttributes(imgSlider, {
	class: 'fulll-img',
	src: '../components/webe-devtools/img_webe-devtools/fulllogoDevtools.png',
	alt: 'HOOT Webelistics Logo Image',
});

class WebeDevtools extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		console.info(
			'%c This Web Component has || * FIRED * || webe-devtools.js is connected',
			'background: #222222; color: #FF4500'
		);
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		// this.shadowRoot.appendChild(imgSlider);

		this.shadowRoot.appendChild(
			scriptTags
		).innerHTML = `import "../components/webe-devtools/tags-devtools.js";`;
		this.shadowRoot.appendChild(
			style
		).innerHTML = `@import "../components/webe-devtools/webe-devtools.css";`;

		this.shadowRoot.appendChild(section_slider);

		const RenderTags = tags => {
			return tags();
		};

		RenderTags(createTags);

		const shadow = this.shadowRoot;

		const slider = shadow.querySelector('.section-slider');
		const nextBtn = shadow.querySelector('.next-btn');
		const prevBtn = shadow.querySelector('.prev-btn');
		const slides = shadow.querySelectorAll('.slide');
		const slideIcons = shadow.querySelectorAll('.slide-icon');
		const numberOfSlides = slides.length;
		var slideNumber = 0;

		//image slider next button
		nextBtn.addEventListener('click', () => {
			slides.forEach(slide => {
				slide.classList.remove('active');
			});
			slideIcons.forEach(slideIcon => {
				slideIcon.classList.remove('active');
			});

			slideNumber++;

			if (slideNumber > numberOfSlides - 1) {
				slideNumber = 0;
			}

			slides[slideNumber].classList.add('active');
			slideIcons[slideNumber].classList.add('active');
		});

		//image slider previous button
		prevBtn.addEventListener('click', () => {
			slides.forEach(slide => {
				slide.classList.remove('active');
			});
			slideIcons.forEach(slideIcon => {
				slideIcon.classList.remove('active');
			});

			slideNumber--;

			if (slideNumber < 0) {
				slideNumber = numberOfSlides - 1;
			}

			slides[slideNumber].classList.add('active');
			slideIcons[slideNumber].classList.add('active');
		});

		//image slider autoplay
		var playSlider;

		var repeater = () => {
			playSlider = setInterval(function () {
				slides.forEach(slide => {
					slide.classList.remove('active');
				});
				slideIcons.forEach(slideIcon => {
					slideIcon.classList.remove('active');
				});

				slideNumber++;

				if (slideNumber > numberOfSlides - 1) {
					slideNumber = 0;
				}

				slides[slideNumber].classList.add('active');
				slideIcons[slideNumber].classList.add('active');
			}, 9000);
		};
		repeater();

		//stop the image slider autoplay on mouseover
		slider.addEventListener('mouseover', () => {
			clearInterval(playSlider);
		});

		//start the image slider autoplay again on mouseout
		slider.addEventListener('mouseout', () => {
			repeater();
		});
	}
	disconnectedCallback() {}
}

window.customElements.define('webe-devtools', WebeDevtools);

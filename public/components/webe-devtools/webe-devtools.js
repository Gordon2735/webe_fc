import { setAttributes, createTags } from './tags-devtools.js';
export const section_slider = document.createElement('section');

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
	id: 'myData',
	class: 'section-slider',
	alt: 'Slider Container: Section Element on the webe-devtools Web Component HTML Page!',
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
		this.shadowRoot.appendChild(section_slider);

		this.shadowRoot.appendChild(
			scriptTags
		).innerHTML = `import "../components/webe-devtools/tags-devtools.js";`;

		this.shadowRoot.appendChild(
			style
		).innerHTML = `@import "../components/webe-devtools/webe-devtools.css";`;

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
		let slideNumber = 0;

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

		fetch(
			'../components/webe-devtools/data_webe-devtools/webe-devtools.json'
		)
			.then(response => response.json())
			.then(data => {
				if (data.length >= 1) {
					appendData(data);
				} else {
					if (data.length === 0) {
						console.log('No Data');
					}
				}
			})
			.catch(error => console.log(error));

		const appendData = data => {
			const imgOne = shadow.getElementById('img-one');
			const h2One = shadow.getElementById('h2-one');
			const pOne = shadow.getElementById('p-one');
			const imgTwo = shadow.getElementById('img-two');
			const h2Two = shadow.getElementById('h2-two');
			const pTwo = shadow.getElementById('p-two');
			const imgThree = shadow.getElementById('img-three');
			const h2Three = shadow.getElementById('h2-three');
			const pThree = shadow.getElementById('p-three');
			const imgFour = shadow.getElementById('img-four');
			const h2Four = shadow.getElementById('h2-four');
			const pFour = shadow.getElementById('p-four');
			const imgFive = shadow.getElementById('img-five');
			const h2Five = shadow.getElementById('h2-five');
			const pFive = shadow.getElementById('p-five');

			for (let i = 0; i < data.length; i++) {
				imgOne.src = `${data[i].intro.image}`;
				h2One.innerHTML = `Introduction to our Applications:`;
				pOne.innerHTML = `${data[i].intro.message} <br>
					${data[i].intro.instructions} <br>
					${data[i].intro.questions} <br>
					${data[i].intro.explainer}        
				`;

				imgTwo.src = `${data[i].int_app_basic.image}`;
				h2Two.innerHTML = `Internet Basic Application:`;
				pTwo.innerHTML = `Server: ${data[i].int_app_basic.server} <br>
					Server-Side Software: ${data[i].int_app_basic.server_side} <br>
					Client: ${data[i].int_app_basic.client} <br>
					Client-Side: ${data[i].int_app_basic.client_side} <br>
					Description: ${data[i].int_app_basic.description} <br>
					Platform: ${data[i].int_app_basic.platforms} 
				`;

				imgThree.src = `${data[i].int_app_Standard.image}`;
				h2Three.innerHTML = `Internet Standard Application:`;
				pThree.innerHTML = `Server: ${data[i].int_app_Standard.server} <br>
					Server-Side Software: ${data[i].int_app_Standard.server_side} <br>
					Client: ${data[i].int_app_Standard.client} <br>
					Client-Side: ${data[i].int_app_Standard.client_side} <br>
					Description: ${data[i].int_app_Standard.description} <br>
					Platform: ${data[i].int_app_Standard.platforms} 
				`;

				imgFour.src = `${data[i].int_app_Premium.image}`;
				h2Four.innerHTML = `Internet Premium Application:`;
				pFour.innerHTML = `Server: ${data[i].int_app_Premium.server} <br>
					Server-Side Software: ${data[i].int_app_Premium.server_side} <br>
					Client: ${data[i].int_app_Premium.client} <br>
					Client-Side: ${data[i].int_app_Premium.client_side} <br>
					Description: ${data[i].int_app_Premium.description} <br>
					Platform: ${data[i].int_app_Premium.platforms} 
				`;

				imgFive.src = `${data[i].int_app_Ultimate.image}`;
				h2Five.innerHTML = `Internet Ultimate Application:`;
				pFive.innerHTML = `Server: ${data[i].int_app_Ultimate.server} <br>
					Server-Side Software: ${data[i].int_app_Ultimate.server_side} <br>
					Client: ${data[i].int_app_Ultimate.client} <br>
					Client-Side: ${data[i].int_app_Ultimate.client_side} <br>
					Description: ${data[i].int_app_Ultimate.description} <br>
					Platform: ${data[i].int_app_Ultimate.platforms} 
				`;
			}
		};
	}
	disconnectedCallback() {}
}

window.customElements.define('webe-devtools', WebeDevtools);

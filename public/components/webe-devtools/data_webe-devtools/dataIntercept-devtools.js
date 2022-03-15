// import { section_slider } from '../webe-devtools.js';
// import '../tags-devtools.js';
// import '../webe-devtools.js';

import WebeDevtools from '../webe-devtools.js';

fetch('../components/webe-devtools/data_webe-devtools/webe-devtools.json')
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
	const shadow = WebeDevtools2.shadowRoot;
	const imgOne = shadow.getElementById('img-one');
	const h2One = shadow.getElementById('h2-one');
	const pOne = shadow.getElementById('p-one');
	const imgTwo = shadow.getElementById('img-two');
	const h2Two = shadow.getElementById('h2-two');
	const pTwo = shadow.getElementById('p-two');

	for (let i = 0; i < data.length; i++) {
		imgOne.src = `${data[i].intro.image}`;
		h2One.innerHTML = `Introduction to our Applications:`;
		pOne.innerHTML = `${data[i].intro.message} <br>
            ${data[i].intro.instructions} <br>
            ${data[i].intro.questions} <br>
            ${data[i].intro.explainer}        
        `;

		imgTwo.src = `${data[i].intbasic.image}`;
		h2Two.innerHTML = `Internet Basic Application:`;
		pTwo.innerHTML = `${data[i].intbasic.server} <br>
            ${data[i].intbasic.server_side} <br>
            ${data[i].intbasic.client} <br>
            ${data[i].intbasic.client_side} <br>
            ${data[i].intbasic.description} <br>
            ${data[i].intbasic.platforms} 
        `;
	}
};

// section_slider.appendChild(divOne);
// <br>
// ${data[i].intro.image}

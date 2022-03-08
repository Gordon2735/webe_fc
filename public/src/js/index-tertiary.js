//
'use strict';
//

import { body, setAttributes } from './webeLibrary.js';

const init = () => {
	const h1Title = document.createElement('h1');
	const h1Text = 'HOOT Webelistics<sup class="h1-sup">&#174;</sup> in 2022';

	const Render = () => {
		setAttributes(h1Title, {
			id: 'h1-title',
			class: 'h1-title',
			alt: 'h1 title HOOT Webelistics in 2022',
		});
		body.appendChild(h1Title);
		h1Title.innerHTML = `${h1Text}`;
	};
	Render();
};

document.addEventListener('DOMContentLoaded', init);

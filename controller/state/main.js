'use strict';

import store from '/state/store/indexState.js';
import Count from '/state/components/count.js';
import List from '/state/components/list.js';
import Status from '/state/components/status.js';

const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');

formElement.addEventListener('submit', event => {
	event.preventDefault();

	let value = inputElement.value.trim();

	if (value.length) {
		store.dispatch('addItem', value);
		inputElement.value = '';
		inputElement.focus();
	}
});

const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();

countInstance.render();
listInstance.render(),
	() => {
		console.info('List rendered');
	};
statusInstance.render();

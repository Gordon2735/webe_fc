'use strict';

import store from '/state/store/indexState.js';
import StartDataShell from '/state/components/startDataShell.js';
import { setAttributes } from '../components/webe-data/data-utility.js';

const dataShell = document.querySelector('data-shell');

export const currentDOM = async () => {
	if (store.state.checkHead === true) {
		const checkDataShell = async () => {
			dataShell.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('dataShell', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
			await setAttributes(dataShell, {
				id: 'data-shell',
				class: 'data-shell',
				alt: 'Data Shell'
			});
		};
		checkDataShell();
	}
};
currentDOM();

export const checkBody = async () => {
	if (store.state.checkBody === true) {
		const domBody = async () => {
			document.body.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.state.checkBody('DOMContentLoaded', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 0),
				() => {
					store.state('DOMContentLoaded', true);
				}
			);
		};
		domBody();
	} else {
		await new Promise(
			resolve => setTimeout(resolve, 0),
			() => {
				if (store.state.checkBody === false)
					store.state('DOMContentLoaded', true);
			}
		);
	}
};
checkBody();

const startDataShellInstance = new StartDataShell();
startDataShellInstance.render();

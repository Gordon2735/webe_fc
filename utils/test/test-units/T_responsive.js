'use strict';
// import '../../../public/src/js/index.js';
// import { webeResponsive } from '../../../public/src/js/index.js';

// const ok = webeResponsive.querySelector('webe-responsive');

// const whatNow = document.querySelector()
// const body = document.querySelector('body');
// const respComp = document.querySelector('webe-responsive');

// export const classType = respComp.getAttribute('class');

const checkForResponsive = () => {
	const responsive = document.querySelector('webe-responsive');
	if (responsive === 'webe-responsive') {
		return true, console.log(true);
	} else {
		return false;
	}
};

export default checkForResponsive;

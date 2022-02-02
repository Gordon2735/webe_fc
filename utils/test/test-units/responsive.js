'use strict';

const checkForResponsive = () => {
	const responsive = document.querySelector('webe-responsive');
	if (responsive) {
		return true;
	} else {
		return false;
	}
};

export default checkForResponsive;

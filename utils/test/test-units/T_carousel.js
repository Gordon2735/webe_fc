'use strict';

const checkForCarousel = () => {
	const carousel = document.querySelector('webe-carousel');
	if (carousel) {
		return true;
	} else {
		return false;
	}
};

export default checkForCarousel;

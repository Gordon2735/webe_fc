'use strict';

const checkForSearch = () => {
	const search = document.querySelector('webe-search');
	if (search) {
		return true;
	} else {
		return false;
	}
};

export default checkForSearch;

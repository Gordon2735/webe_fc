const checkForHeader = () => {
	const header = document.querySelector('webe-header');
	if (header) {
		return true;
	} else {
		return false;
	}
};

export default checkForHeader;

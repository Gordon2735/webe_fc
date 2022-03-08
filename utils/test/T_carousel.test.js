'use strict';

import checkForCarousel from './test-units/T_carousel.js';

test('checkForCarousel to be active', () => {
	expect(checkForCarousel()).toBe(false);
});

'use strict';

import checkForResponsive from './test-units/responsive';

test('checkForResponsive', () => {
	expect(checkForResponsive()).toBe(false);
});

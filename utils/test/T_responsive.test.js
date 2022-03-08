'use strict';

import checkForResponsive from './test-units/T_responsive.js';

test('when checkForResponsive is deployed it should have a class of webe-responsive; true if deployed', () => {
	expect(checkForResponsive()).toBe(false);
});

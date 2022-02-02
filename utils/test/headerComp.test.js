'use strict';

import checkForHeader from './test-units/headerComp';

test('checkForHeader', () => {
	expect(checkForHeader()).toBe(false);
});

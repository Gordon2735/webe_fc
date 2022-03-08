'use strict';

import checkForHeader from './test-units/T_headerComp';

test('checkForHeader', () => {
	expect(checkForHeader()).toBe(false);
});

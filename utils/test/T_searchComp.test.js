'use strict';

import checkForSearch from './test-units/T_searchComp';

test('checkForSearch', () => {
	expect(checkForSearch()).toBe(false);
});

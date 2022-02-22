'use strict';

import checkForSearch from './test-units/searchCompTest';

test('checkForSearch', () => {
	expect(checkForSearch()).toBe(false);
});

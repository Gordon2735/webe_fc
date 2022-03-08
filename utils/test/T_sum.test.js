'use strict';

import sum from './test-units/T_sum.js';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

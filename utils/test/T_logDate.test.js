'use strict';

import dateFormat from './test-units/T_logDate';

test('Returns the current year from the date of the log file', () => {
	expect(dateFormat()).toBe(`${new Date().getFullYear()}`);
});

console.info(
	`found the format of the date-fns import for the year ${dateFormat()}
to be working properly,

HOOT WebelisticsÂ® ~ Web Application Development

		HOOT for a Great Web App!!!`
);

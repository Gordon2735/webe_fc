import main from './test-units/T_setAttributes.js';

test('expect main to have a class of "main"', () => {
	const typeClass = main.getAttribute('class');
	expect(typeClass).toBe('main');
});

import div from './test-units/T_webe_devtools.js';

test('expect div to have a class of "slide"', () => {
	const typeClass = div.getAttribute('class');
	expect(typeClass).toBe('slide');
});

import checkForCarousel from './test-units/carousel.js';

test('checkForCarousel to be active', () => {
	expect(checkForCarousel()).toBe(false);
});

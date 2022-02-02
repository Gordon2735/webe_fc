import { sum as sum2 } from '../utils/test/sum.test.js';
import { logDates as logDates2 } from '../utils/test/logDates.test.js';
import { calculator as calculator2 } from '../utils/test/calculator.test.js';
import { headerComp as headerComp2 } from '../utils/test/headerComp.test.js';
import { responsive as responsive2 } from '../utils/test/responsive.test.js';
import { carousel as carousel2 } from '../utils/test/carousel.test.js';

const testAction = () => {
	console.log('testAction');
	sum2();
	logDates2();
	calculator2();
	headerComp2();
	responsive2();
	carousel2();
};

export default testAction;

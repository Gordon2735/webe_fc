import { sum as sum2 } from '../utils/test/sum.test.js';
import { logDates as logDates2 } from '../utils/test/logDates.test.js';
import { calculator as calculator2 } from '../utils/test/calculator.test.js';

const testAction = () => {
	console.log('testAction');
	sum2();
	logDates2();
	calculator2();
};

export default testAction;

'use strict';

import { T_sum as T_sum2 } from '../utils/test/T_sum.test.js';
import { T_logDate as T_logDate2 } from '../utils/test/T_logDate.test.js';
import { T_calculator as T_calculator2 } from '../utils/test/T_calculator.test.js';
import { T_headerComp as T_headerComp2 } from '../utils/test/T_headerComp.test.js';
import { T_responsive as T_responsive2 } from '../utils/test/T_responsive.test.js';
import { T_carousel as T_carousel2 } from '../utils/test/T_carousel.test.js';
import { T_searchComp as T_searchComp2 } from '../utils/test/T_searchComp.test.js';
import { T_setAttributes as T_setAttributes2 } from '../utils/test/T_setAttributes.test.js';

const testAction = () => {
	console.log('testAction');
	T_sum2();
	T_logDate2();
	T_calculator2();
	T_headerComp2();
	T_responsive2();
	T_carousel2();
	T_searchComp2();
	T_setAttributes2();
};

export default testAction;

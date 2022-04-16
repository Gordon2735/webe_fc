'use strict';

import express from 'express';
import home from './routes/home-route.js';
import headers from './routes/headers-route.js';
import about from './routes/about-route.js';
import blog from './routes/blog-route.js';
import todos from './routes/todos-route.js';
import contacts from './routes/contacts-route.js';
import app_build from './routes/app_build-route.js';
import get_start from './routes/get_start-route.js';
import app_packages from './routes/app_packages-route.js';
import web_app_packages from './routes/web_app_packages-route.js';
import desktop_app_packages from './routes/desktop_app_packages-route.js';
import development from './routes/development-route.js';
import dev_tools from './routes/dev_tools-route.js';
import app_design from './routes/app_design-route.js';
import devtools_slider from './routes/devtools_slider-route.js';
import support from './routes/support-route.js';
import q_n_a from './routes/q_n_a-route.js';
import helps from './routes/helps-route.js';
import hoot_2022 from './routes/hoot_2022-route.js';
import internet from './routes/internet-route.js';
import mobile from './routes/mobile-route.js';
import desktop from './routes/desktop-route.js';
import accounts from './routes/accounts-route.js';
import TEST from './routes/TEST-route.js';
// import fourOfour from './routes/404-route.js';
// import fiveOO from './routes/500-route.js';

// const app = express();
const router = express.Router();
router.use(express.static('./routes'));
const routeExpress = router.use(express.static('./routes'));

router.use('/', home);
router.use('/', hoot_2022);
router.use('/', about);
router.use('/', blog);
router.use('/', contacts);
router.use('/', app_build);
router.use('/', get_start);
router.use('/', app_packages);
router.use('/', web_app_packages);
router.use('/', desktop_app_packages);
router.use('/', development);
router.use('/', dev_tools);
router.use('/', app_design);
router.use('/', devtools_slider);
router.use('/', support);
router.use('/', q_n_a);
router.use('/', helps);
router.use('/', internet);
router.use('/', mobile);
router.use('/', desktop);
router.use('/', accounts);
router.use('/', headers);
router.use('/', todos);
router.use('/', TEST);
router.use((req, res, next) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});

// router.use('404', fourOfour);
// router.use('500', fiveOO);

//
export default router;
export { routeExpress };

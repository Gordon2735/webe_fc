'use strict';

import express from 'express';

// const app = express();
const router = express.Router();
router.use(express.static('../../views'));

//%  /About page Route
let user;
const about = router
	.get('/about', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('about', { layout: 'main-secondary' });
	})
	.post('/about', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
// router.use((req, res, next) => {
// 	if (!res.locals.partials) res.locals.partials = {};
// 	next();
// });
export default about;

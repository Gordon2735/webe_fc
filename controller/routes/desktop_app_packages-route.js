'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /desktop_app_packages page Route
let user;
const desktop_app_packages = router
	.get('/desktop_app_packages', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('desktop_app_packages');
	})
	.post('/', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
export default desktop_app_packages;

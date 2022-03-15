'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /desktop_app_packages page Route
let user;
const TEST = router
	.get('/TEST', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('TEST');
	})
	.post('/TEST', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
export default TEST;

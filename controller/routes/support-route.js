'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /SUPPORT page Route
let user;
const support = router
	.get('/support', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('support');
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
export default support;

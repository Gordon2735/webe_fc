'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /The Dev Tools page Route
let user;
const dev_tools = router
	.get('/dev_tools', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('dev_tools');
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
export default dev_tools;

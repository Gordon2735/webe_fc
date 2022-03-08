'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /Your Question and Answers page Route
let user;
const hoot_2022 = router
	.get('/hoot_2022', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('hoot_2022', {
			layout: 'main-tertiary',
		});
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
export default hoot_2022;

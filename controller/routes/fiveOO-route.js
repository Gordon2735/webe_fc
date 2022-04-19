'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

let user;
const fiveOO = router
	.get('/500', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('500');
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

export default fiveOO;

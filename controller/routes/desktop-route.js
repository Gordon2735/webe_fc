'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

let user;
const desktop = router
	.get('/desktop', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('desktop');
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

export default desktop;

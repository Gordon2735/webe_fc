'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

let user;
const blog = router
	.get('/blog', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('blog', { layout: 'main-tertiary' });
	})
	.post('/blog', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});

export default blog;

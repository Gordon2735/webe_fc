'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /Contacts Login-Page page Route
let user;
const devtools_slider = router
	.get('/devtools_slider', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('devtools_slider');
	})
	.post('/toslideshow', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
export default devtools_slider;

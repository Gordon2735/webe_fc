import express from 'express';
const router = express.Router();

//% /The Development Phase page Route
const development = router
	.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('development');
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
export default development;

import express from 'express';
const router = express.Router();

//% /Application Packages page Route
const app_packages = router
	.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('app_packages');
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
export default app_packages;

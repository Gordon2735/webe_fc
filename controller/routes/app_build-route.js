import express from 'express';
const router = express.Router();
router.use(express.static('../../views'));

//% /App_Build page Route
let user;
const app_build = router
	.get('/app_build', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('app_build');
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
export default app_build;

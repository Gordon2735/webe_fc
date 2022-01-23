import express from 'express';
const router = express.Router();

//%  /About page Route
const about = router
	.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('about');
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
router.use((req, res, next) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});
export default about;

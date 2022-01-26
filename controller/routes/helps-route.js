import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /Your Question and Answers page Route
let user;
const helps = router
	.get('/helps', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('helps');
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
export default helps;

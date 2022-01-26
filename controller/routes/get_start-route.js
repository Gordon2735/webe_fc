import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /Getting Started page Route
let user;
const get_start = router
	.get('/get_start', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('get_start');
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
export default get_start;

import express from 'express';

// const app = express();
const router = express.Router();
router.use(express.static('../../views'));

//%  /Home page Route
let user;
const home = router
	.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('home');
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
export default home;

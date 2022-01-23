import express from 'express';
const router = express.Router();

//% /Your Question and Answers page Route
const q_n_a = router
	.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('q_n_a');
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
export default q_n_a;

import express from 'express';
const router = express.Router();

//% /Contacts Login-Page page Route
const contacts = router
	.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('contacts');
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
export default contacts;

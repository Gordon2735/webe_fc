import express from 'express';
const router = express.Router();
router.use(express.static('../../views'));

//% /500 Server Error
const fiveOO = router.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.render('500', error => {
		console.error(`Sorry, there seems to be a Server Error, ${error}`);
	});
	res.status(404);
});
export default fiveOO;

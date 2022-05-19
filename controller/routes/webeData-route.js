import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//% /webe-data/webe-data page route.
const webeData = router.get('/webe-data', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.render('webe-data', { layout: 'main-quaternary' });
});
export default webeData;

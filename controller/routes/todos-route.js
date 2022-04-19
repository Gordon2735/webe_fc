import express from 'express';
import TodosModel from '../../models/schemas/blog-schemas/blog-schema.js';

const router = express.Router();
router.use(express.static('../../views'));

//% /Contacts Login-Page page Route
const todos = router
	.get('/todos', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('todos', { layout: 'main-quaternary' });
	})
	.get('/todos', async (req, res) => {
		// Index Route (get - '/todos'), Returns all todos
		res.json(
			await TodosModel.find({}).catch(error =>
				res.status(400).json(error)
			)
		);
	})
	// .get('/home', (req, res) => {
	// 	res.render('home', 'views/home.handlebars');
	// })
	.get('/:id', async (req, res) => {
		// Show Route (get - '/todos'), Returns a single todo
		res.json(
			await TodosModel.findById(req.params.id).catch(error =>
				res.status(400).json(error)
			)
		);
	})
	.post('/:id', async (req, res) => {
		// Create Route (post - '/todos'), Creates a new todo
		res.json(
			await TodosModel.create(req.body).catch(error =>
				res.status(400).json(error)
			)
		);
	})
	.put('/:id', async (req, res) => {
		// Update Route (update - '/todos'), Updates a particular todo
		res.json(
			await TodosModel.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
			}).catch(error => res.status(400).json(error))
		);
	})
	.delete('/:id', async (req, res) => {
		// Delete Route (delete - '/todos'), Deletes a particular todo
		res.json(
			await TodosModel.findByIdAndRemove(req.params.id).catch(error =>
				res.status(400).json(error)
			)
		);
	});
export default todos;

// .post('/todosdos', async (req, res) => {
// 	res.json(
// 		await user.create(req.body).catch(error => {
// 			res.status(400),
// 				console.info(
// 					`Whoops, seems there was a "Page Not Found Error" ${error}`
// 				);
// 		})
// 	);
// });

//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    blog-schema    ::::::::  )//

'use strict';

// import { ObjectId } from 'mongodb';
// import { Schema, model } from '../../database/blog_database/blog.js';

// const TodoSchema = new Schema(
// 	{
// 		todoId: {
// 			type: ObjectId,
// 			required: true,
// 			unique: true,
// 			auto: true,
// 			index: true,
// 		},
// 		title: {
// 			type: String,
// 			required: true,
// 		},
// 		task: {
// 			type: String,
// 			required: true,
// 		},
// 		completed: {
// 			type: Boolean,
// 			default: false,
// 		},
// 		notes: {
// 			type: String,
// 			default: '',
// 			reminder: String,
// 		},
// 	},
// 	{ versionKey: false, autoIndex: true }
// );

// const TodosModel = model('Todo', TodoSchema);

// export default TodosModel;

// // *schema definition* //
// // possible recursive embedded-document schema
// model;
// const Comment = new Schema();

// Comment.add({
// 	title: {
// 		type: String,
// 		required: true,
// 		indexed: true,
// 	},
// 	date: Date,
// 	body: String,
// 	comments: [Comment],
// });

// const BlogPost = new Schema({
// 	title: {
// 		type: String,
// 		index: true,
// 	},
// 	slug: {
// 		type: String,
// 		lowercase: true,
// 		trim: true,
// 	},
// 	date: Date,
// 	buf: Buffer,
// 	comments: [Comment],
// 	creator: Schema.ObjectId,
// });
// export const Person = new Schema({
// 	name: {
// 		first: String,
// 		last: String,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		index: {
// 			unique: true,
// 			sparse: true,
// 		},
// 	},
// 	alive: Boolean,
// });
// // *Accessing a specific schema type by key* //

// BlogPost.path('date')
// 	.default(function () {
// 		return new Date();
// 	})
// 	.set(function (v) {
// 		return v === 'now' ? new Date() : v;
// 	});

// // *Pre hook* //

// BlogPost.pre('save', function (next, done) {
// 	// *global emailAuthors* //
// 	emailAuthors(done); // some async function
// 	next();
// });
// // *Methods* //

// BlogPost.methods.findCreator = function (callback) {
// 	return this.db.model('Person').findById(this.creator, callback);
// };

// BlogPost.statics.findByTitle = function (title, callback) {
// 	return this.find({ title: title }, callback);
// };

// BlogPost.methods.expressiveQuery = function (creator, date, callback) {
// 	return this.find('creator', creator).where('date').run(callback);
// };

// // *Plugins* //

// function slugGenerator(options) {
// 	options = options || {};
// 	const key = options.key || 'title';

// 	return function slugGenerator(schema) {
// 		schema.path(key).set(function (v) {
// 			this.slug = v
// 				.toLowerCase()
// 				.replace(/[^a-z0-9]/g, '')
// 				.replace(/-+/g, '');
// 			return v;
// 		});
// 	};
// }

// BlogPost.plugin(slugGenerator());

// // *Define Model* //

// mongoose.model('BlogPost', BlogPost);
// mongoose.model('Person', Person);
// }
// main();

// title: String,
// const webeBlog = new Blog({
//     title: 'The Hoot Blog',
// });
// console.log(webeBlog.title);
// const Blog = mongoose.model('Blog', blogSchema);

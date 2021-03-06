var mongoose = require('mongoose');
var Schema = mongoose.Schema;

todoSchema = new Schema( {
	unique_id: Number,
	title: String,
	count: Number
}),
Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

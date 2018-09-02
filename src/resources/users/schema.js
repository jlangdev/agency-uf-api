const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
	username: String,
	password: String,
	studentId: String
});

const User = mongoose.model('Users', usersSchema);
module.exports = User;
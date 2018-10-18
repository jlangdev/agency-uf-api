var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  userName: String,
  password: String,
  email: String
});

var User = mongoose.model('users', usersSchema,'users');
module.exports = User;
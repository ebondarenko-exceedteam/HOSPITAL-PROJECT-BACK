const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersScheme = new Schema({
  login: String,
  password: String
});

module.exports = Users = mongoose.model('users', usersScheme);
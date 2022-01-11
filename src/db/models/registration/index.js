const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registrationScheme = new Schema({
  name: String,
  doctor: String,
  date: String,
  complaint: String
});

module.exports = Registration = mongoose.model('registration', registrationScheme);
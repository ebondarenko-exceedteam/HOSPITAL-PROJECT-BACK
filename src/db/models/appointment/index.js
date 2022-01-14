const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentScheme = new Schema({
  userId: String,
  name: String,
  doctor: String,
  date: String,
  complaint: String
});

module.exports = Appointment = mongoose.model('appointment', appointmentScheme);
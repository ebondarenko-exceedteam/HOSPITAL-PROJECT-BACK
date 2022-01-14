const jwt = require('jsonwebtoken');
const { secret } = require('./config');
const Appointment = require('../../db/models/appointment/index');

module.exports.getAllAppointments = (req, res, next) => {
  const token = req.headers.authorization;
  const userId = jwt.verify(token, secret).id;
  if (!userId) {
    res.status(401).json({data: 'Token error'})
  }
  Appointment.find({userId}).then(result => {
    res.send({data: result})
  });
}
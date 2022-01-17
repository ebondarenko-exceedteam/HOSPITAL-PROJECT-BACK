const express = require('express');
const router = express.Router();

const {
  createNewUser,
  authorizationUser
} = require('../controllers/users.controller');

const {
  getAllAppointments,
  createNewAppointment,
//   changeAppointment,
//   deleteAppointment
} = require('../controllers/appointment.controller');

//Users routes
router.post('/createNewUser', createNewUser);
router.post('/authorizationUser', authorizationUser);

//Appointment routes
router.get('/getAllAppointments', getAllAppointments);
router.post('/createNewAppointment', createNewAppointment);
// router.patch('/changeAppointment', changeAppointment);
// router.delete('/deleteAppointment', deleteAppointment);

module.exports = router;
const express = require('express');
const router = express.Router();

const {
  createNewUser,
  authorizationUser
} = require('../controllers/users.controller');

// const {
//   getAllRegistrations,
//   createNewRegistration,
//   changeRegistration,
//   deleteRegistration
// } = require('../controllers/registration.controller');

//Users routes
router.post('/createNewUser', createNewUser);
router.post('/authorizationUser', authorizationUser);

//Registration routes
// router.get('/getAllRegistrations', getAllRegistrations);
// router.post('/createNewRegistration', createNewRegistration);
// router.patch('/changeRegistration', changeRegistration);
// router.delete('/deleteRegistration', deleteRegistration);

module.exports = router;
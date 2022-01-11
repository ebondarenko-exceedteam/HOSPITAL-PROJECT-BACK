const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require('./config');
const Users = require('../../db/models/users/index');

const generateAccessToken = (id) => {
  const payload = {id};
  return jwt.sign(payload, secret, {expiresIn: '12h'});
}

module.exports.createNewUser = async (req, res, next) => {
  const {login, password} = req.body;
  const candidate = await Users.findOne({login});
  if (candidate) {
    return res.status(401).json({data: 'Login already exists'});
  };
  const hashPassword = bcrypt.hashSync(password, 5);
  const users = new Users({login, password: hashPassword});
  users.save().then(result => {
    Users.findOne({login}).then(result => {
      const { _id, login } = result;
      const token = generateAccessToken(_id);
      res.send({token, login})
    })
  }).catch(err => {
    console.log(err);
    res.status(400).json({data: 'Registration error'})
  });
};
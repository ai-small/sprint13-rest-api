const mongoose = require('mongoose');
const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send({ data: users }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const getUserById = (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    User.findById(req.params.id)
      .then((user) => {
        if (user) {
          res.status(200).send({ data: user });
        } else res.status(404).send({ message: 'User not found' });
      })
      .catch((err) => res.status(500).send({ message: err.message }));
  } else res.status(404).send({ message: 'User not found' });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};

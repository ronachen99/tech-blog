const { User } = require('../models');

const userData = [
  {
    username: 'happyCat',
    password: 'password'
  },
  {
    username: 'bananaCat',
    password: 'password'
  }
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
module.exports = seedUser;

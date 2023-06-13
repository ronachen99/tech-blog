const sequelize = require('../config/connection');

// Import data from each json file
const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData');

// Seed through terminal by using "node seeds/index.js"
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedDatabase();

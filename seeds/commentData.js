const { Comment } = require('../models');

const commentData = [
  {
    feedback:
      'Sed tristique convallis sem. Ut non arcu a dui volutpat tempus. Duis id consectetur enim.',
    user_id: 2,
    post_id: 1
  },
  {
    feedback:
      'Etiam sit amet auctor justo. Proin vel nisi a risus vestibulum mollis sollicitudin in felis.',
    user_id: 1,
    post_id: 2
  }
];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;

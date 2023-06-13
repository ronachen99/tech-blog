const { Post } = require('../models');

const postData = [
  {
    title:
      'The Rise of Artificial Intelligence: How AI is Transforming Industries',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum leo vitae magna fringilla venenatis. Proin et arcu a tortor tincidunt dignissim in eget leo. Sed molestie lorem eu odio accumsan lacinia. Sed magna elit, elementum vitae lectus ut, lobortis aliquam lacus. Cras porttitor massa id luctus tempus.',
    user_id: 1
  },
  {
    title: 'Exploring the Future of Virtual Reality: Trends and Innovations',
    description:
      'Ut pharetra nec eros eu feugiat. In imperdiet mi sit amet eros auctor, eu luctus mauris facilisis. Suspendisse risus ipsum, pretium eget lobortis vel, mollis vitae turpis. Fusce at ex quis tellus commodo pellentesque sit amet nec tellus. Cras at purus hendrerit risus scelerisque placerat.',
    user_id: 2
  }
];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;

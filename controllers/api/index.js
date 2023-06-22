const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Use the userRoutes for handling user-related routes
router.use('/user', userRoutes);

// Use the postRoutes for handling post-related routes
router.use('/post', postRoutes);

// Use the commentRoutes for handling comment-related routes
router.use('/comment', commentRoutes);

module.exports = router;

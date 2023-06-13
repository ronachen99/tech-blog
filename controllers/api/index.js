const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/post', projectRoutes);
router.use('/comment', commentRoutes);

module.exports = router;

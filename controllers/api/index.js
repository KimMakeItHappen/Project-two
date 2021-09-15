const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const searchRoutes = require('./search');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('./search', searchRoutes);
module.exports = router;
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const postRoutes= require('./post-routes.js')


router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/post', postRoutes);



module.exports = router;

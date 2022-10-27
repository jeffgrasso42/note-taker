const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./api/index');

// HTML ROUTES
router.use('/', htmlRoutes);

// API ROUTES
router.use('/api', apiRoutes);

module.exports = router;

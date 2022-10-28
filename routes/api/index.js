const router = require('express').Router();
const notesRoutes = require('./notesRoutes');

// NOTES ROUTES
router.use('/notes', notesRoutes);

module.exports = router;

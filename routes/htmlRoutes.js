// DEPENDENCIES
const router = require('express').Router();
const path = require('path');

// HTML ROUTES
// GET / - home page
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

// GET / - notes page
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

module.exports = router;

// DEPENDENCIES
const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json');

// GET / - db.json
router.get('/', (req, res) => res.json(notes));

module.exports = router;

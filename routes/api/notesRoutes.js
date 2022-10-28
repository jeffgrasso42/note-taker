// DEPENDENCIES
const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json');

// GET / - notes from db.json
router.get('/', (req, res) => res.json(notes));

// POST / - add notes to db.json
router.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);
  notes.push(req.body);
  console.info(notes);
  fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 2), err =>
    err ? console.error(err) : console.info(`Note for ${req.body.title} has been written to JSON file`)
  );
});

module.exports = router;

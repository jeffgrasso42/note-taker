// DEPENDENCIES
const router = require('express').Router();
const fs = require('fs');
// psuedodatabase
const notes = require('../../db/db.json');
// helper function to generate random ids
const uuid = require('../../helpers/uuid');

// GET / - notes from db.json
router.get('/', (req, res) => res.json(notes));

// POST / - add notes to db.json
router.post('/', (req, res) => {
  // store object for alteration
  const newNote = req.body;
  // add random id to object
  newNote.id = uuid();
  // add updated object to notes array
  notes.push(newNote);

  // updated db.json file
  fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 2), err =>
    err ? console.error(err) : console.info(`Note for ${req.body.title} has been written to JSON file`)
  );
});

// DELETE / - remove notes from db.json
router.delete('/:id', (req, res) => {
  if (req.body && req.params.id) {
    console.info(`${req.method} request received to delete a note`);
    notes.forEach((note, idx) => {
      if (note.id === req.params.id) {
        notes.splice(idx, 1);
        return;
      }
    });

    fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 2), err =>
      err ? console.error(err) : console.info(`Note with id: ${req.params.id} has been removed from JSON file`)
    );
    res.status(200);
  }
});

module.exports = router;

// DEPENDENCIES
const router = require('express').Router();
const fs = require('fs');
const fsPromises = require('fs').promises;
// psuedodatabase
// helper function to generate random ids
const uuid = require('../../helpers/uuid');
const FsHandler = require('../../helpers/fs');

// async function getLatestNotes (){
//   try {
//     let data = await fsPromises.readFile('./db/db.json')
//     return JSON.parse(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// GET / - notes from db.json
router.get('/', async (req, res) => {
  console.log('get route');
  let notes = await FsHandler.readNotes();
  console.log(notes);
  res.json(notes);
});

// POST / - add notes to db.json
router.post('/', async (req, res) => {
  // store object for alteration
  let notes = await FsHandler.readNotes();
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
router.delete('/:id', async (req, res) => {
  if (req.body && req.params.id) {
    let notes = await FsHandler.readNotes();
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

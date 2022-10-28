const fsPromises = require('fs').promises;

class FsHandler {
  static async readNotes() {
    try {
      let data = await fsPromises.readFile('./db/db.json');
      console.log(data);
      console.log(JSON.parse(data));

      return JSON.parse(data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FsHandler;

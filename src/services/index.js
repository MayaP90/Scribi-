const notes = require('./notes/notes.service.js');
const users = require('./users/users.service.js');
const folders = require('./folders/folders.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(notes);
  app.configure(users);
  app.configure(folders);

};

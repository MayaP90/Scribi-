// Initializes the `folders` service on path `/folders`
const { Folders } = require('./folders.class');
const createModel = require('../../models/folders.model');
const hooks = require('./folders.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/folders', new Folders(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('folders');

  service.hooks(hooks);
};

// Initializes the `anime` service on path `/anime`
const { Anime } = require('./anime.class');
const createModel = require('../../models/anime.model');
const hooks = require('./anime.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/anime', new Anime(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('anime');

  service.hooks(hooks);
};

// Initializes the `mailingList` service on path `/mailing-list`
const { MailingList } = require('./mailing-list.class');
const hooks = require('./mailing-list.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mailing-list', new MailingList(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mailing-list');

  service.hooks(hooks);
};

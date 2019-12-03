const users = require('./users/users.service.js');
const anime = require('./anime/anime.service.js');
const mailingList = require('./mailing-list/mailing-list.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(anime);
  app.configure(mailingList);
};

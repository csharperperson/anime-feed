// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
  
    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
  
    firstName: { type: String },
    lastName: { type: String },
  
    auth0Id: { type: String },
  
    googleId: { type: String },
  
    facebookId: { type: String },
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users, 'users');
};

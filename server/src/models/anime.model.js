// anime-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const anime = new Schema({
    title: { type: String, required: true },
    type: { type: String },
    episodes: { type: Number },
    picture: { type: String },
    thumbnail: { type: String },
    synonyms: [String],
    sources: [String],
    relations: [String]
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model("anime");
  } catch (e) {
    return mongooseClient.model("anime", anime);
  }
};

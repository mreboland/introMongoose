const mongoose = require('mongoose');
const { Schema } = mongoose;


// In order to create a Model for a collection (a particular set of data in your database) you must first define the expected structure of documents of this type. This is called a schema.


// TODO
// movieSchema
// name:       String
// director:   String
// nowPlaying: Boolean
// theatres:   Array of theatre names
const movieSchema = new Schema({
    name: String,
    director: String,
    nowPlaying: false,
    theatres: [string],
});

// TODO
// Export mongoose model

module.export = mongoose.model("Movie", movieSchema);

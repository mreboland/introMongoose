const mongoose = require('mongoose');
const { Schema } = mongoose;

// In order to create a Model for a collection (a particular set of data in your database) you must first define the expected structure of documents of this type. This is called a schema.


// TODO
// Import Movie schema for use in theatre schema

// TODO
// theatreSchema
// name:     String
// VIP:      Boolean , default: false
// playing:  Array of movie names that are current playing
const theatreSchema = new Schema({
    name: String,
    VIP: {
        type: Boolean,
        default: false,
    },
    playing: [string],
});

// TODO
// Export mongoose model

module.export = mongoose("Theatre", theatreSchema);
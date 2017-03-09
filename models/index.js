// require mongoose library
var mongoose = require('mongoose');
// connect to mongo (database!)
mongoose.connect('mongodb://localhost/tunely');

// index.js will import each model
//and export an object called EXPORTS
// each exports object has  keys representing each of our models.
// This allows us to require the ENTIRE directory and get all of our models!

module.exports.Album = require("./album.js");

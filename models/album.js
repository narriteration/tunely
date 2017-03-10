// var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
    albumName: String,
    artistName: String,
    releaseDate: String
});

// create the Album MODEL from the SCHEMA above
var Album = mongoose.model('Album', AlbumSchema);

// export Album from this module
module.exports = Album;

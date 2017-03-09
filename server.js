var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');



// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////
//  DATA
///////////////////





////////////////////
//  ROUTES
///////////////////


// GET ALBUMS TODO: CHANGE TO ALBUMS, not books
// app.get('/api/books', function (req, res) {
//   // send all books as JSON response
//   console.log('books index');
//   res.json(books);
// });
//


// 1. GET ROUTES
app.get('/', function (req, res) {
    console.log("Hello Chelsea");
    res.sendFile('views/index.html' , { root : __dirname });
});

// 1. GET /api
app.get('/api', controllers.api.index)




app.listen(process.env.PORT || 4000, function () {
    console.log('Tunely app listening at http://localhost:4000/');
});

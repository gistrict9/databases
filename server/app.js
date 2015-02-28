var express = require('express');
var db = require('server/db/index.js');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Set up post and get

app.get('/messages', function(req, res) {
  db.query('select * from messages', function(err, results) {
    res.status(200).send(results);
  });
});

app.post('/messages', function(req, res) {
  var post = {username: req.body.username, text: req.body.text, roomname: req.body.roomname};
  db.query('insert into messages set ?', post, function(err, results) {
    res.status(201).send(results);
  });
});


// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}


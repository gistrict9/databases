var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js')


module.exports = {
  messages: {
    get: function (req, res) {
      db.query('select * from messages', function(err, results) {
        res.status(200).send(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var post = {username: req.body.username, text: req.body.text, roomname: req.body.roomname};
      db.query('insert into messages set ?', post, function(err, results) {
        res.status(201).send(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


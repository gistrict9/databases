var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// Sequelize
// var Sequelize = require("sequelize");
// var sequelize = new Sequelize("chat", "root", "", {
//   host: '127.0.0.1',
//   dialect: 'mysql'
// });

// module.exports = sequelize;

// SQL Version
  var db = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });
  db.connect();

  module.exports = db;


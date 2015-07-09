var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'asdf',
  database : 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// var testUser = {
//   username : "SouljaBoy"
// }

// connection.query('INSERT INTO users SET ?', testUser, function(error, results) {
//   console.log(error, results);
// })
// connection.query('SELECT * FROM Users', function(error, results){
//   console.log(results);
//   console.log("hello");
// })

module.exports = connection;

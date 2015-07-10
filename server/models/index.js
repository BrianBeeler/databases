var db = require('../db');


module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryStr = 'SELECT u.username, m.text, m.roomId, m.createdAt \
                      FROM users u JOIN messages m \
                      ON u.userID = m.userID \
                      ORDER BY m.createdAt DESC;'
      db.query(queryStr, function(error, results){
        callback(results);
      })
    },

    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      var queryStr = "INSERT INTO messages(text, userId, roomId, createdAt) \
                      VALUES (?,(SELECT userId FROM users WHERE username = ? LIMIT 1), ?, ?"
      db.query(queryStr, params, function(error,results){
        callback(results);
      })
    }

  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = "SELECT * FROM users";
      db.query(queryStr, function(error, results){
        console.log(error);
        callback(results);
      })
    },

    post: function (params,callback) {
      var queryStr = "INSERT INTO users(username) VALUES (?)"
      console.log("Params Array: "+ params)
      db.query(queryStr, params, function(error,results){
        console.log(error)
        callback(results);
      })
    }

//     INSERT INTO table_name (column1,column2,column3,...)
//     VALUES (value1,value2,value3,...);
  }
};



      // var data;
      // db.query('SELECT * FROM Users', function(error, results){
      //   console.log(results);
      //   console.log("results^^");
      //   data = results;

      //    return callback(data)
      // })
      // console.log("data exists :" + data)
      // return data;


      // console.log(models.users.get(req, res));
      // console.log('^^models.users.get(req, res)');
      // res.send(models.users.get(req, res));
      // res.end();

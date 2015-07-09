var db = require('../db');


module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (req, res) {
      db.query('SELECT * FROM Messages', function(error, results){
        res.send(results);
      })
    },

    // a function which can be used to insert a message into the database
    post: function (req, res) {

    }

  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.query('SELECT * FROM Users', function(error, results){
        res.send(results);
      })
    },
    post: function (cumulate, res) {
      console.log(typeof cumulate);
      console.log('^cumulate');
    }

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

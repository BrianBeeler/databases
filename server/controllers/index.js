var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(error, results){
        res.json(results);
      });
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log("Made it to controller!")
      var params = [req.body['text'], req.body['username'], req.body['roomname'], Date.now() ];
      models.messages.post(params, function(error, results) {
        res.json({sucess: true})
      });
    }
  },

  users: {
    // Ditto as above
     get: function (req, res) {
      models.username.get(function(error, results){
        res.json(results);
      });
    },
     post: function (req, res) {
      var params = [req.body['username'] ];
      console.log("req.body" + JSON.stringify(req.body) )
      console.log("Params in controller:" +params)
      models.users.post(params, function(error, results) {
        res.json({sucess: true})
      });
    }
  }
};


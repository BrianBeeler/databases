var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      res.end(models.messages.get());
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      models.messages.post(req,res);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {

      console.log("TEST");
      cumulate = "";
      req.on('data', function(chunk){
        cumulate += chunk;
      });


      req.on('end', function() {
        models.users.post(JSON.parse(cumulate), res);
      });

    }
  }
};


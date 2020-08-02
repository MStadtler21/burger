// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    condition = "id="+req.params.id
    orm.update("burgers", {devoured:true}, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (connection.js).
module.exports = orm;

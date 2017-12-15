// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = { // get all the burgers from callback (cb) from orm
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // create a new burger
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  }, // update the current state/condition of the burger (did you eat it or not)
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
 
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;

// Import MySQL connection.
var connection = require("../config/connection.js");


function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
    
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) { // select from the tableInput
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) { // throw error if it happens
        throw err;
      } // otherwise render the results 
      cb(result);
    });
  }, // create a new burger
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
  // get all the user input and convert to string and replace characters
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    // make sure it comes out right
    console.log(queryString);
    // create a connection with the queryString we just created
    connection.query(queryString, vals, function(err, result) {
      if (err) { // if error throw it
        throw err;
      }
      // else, give me some results
      cb(result);
    });
  },
  // update whether the burger has been devoured 
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    // get our info
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    // show me it came out right
    console.log(queryString); // establish connection
    connection.query(queryString, function(err, result) {
      if (err) { // if error tell me
        throw err;
      }
      // give me results
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;

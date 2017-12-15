// get mysql npm
var mysql = require("mysql");
// create connection to the database
var connection = mysql.createConnection({
  port: 3306,
  host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "p6adh0fajlobkylt",
  password: "qmctbo2o5rh5c78z",
  database: "dwuqqwyxi8vt31id"
});

// Make connection.
connection.connect(function(err) {
  if (err) { // tell me if theres a problem
    console.error("error connecting: " + err.stack);
    return;
  } // else, what is the connection id
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

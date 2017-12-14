// // require these npm packages
// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
// var exphbs = require("express-handlebars")
// var exphbs = require("express-handlebars");
// var mysql = require("mysql");

// // app is express 
// var app = express();
// app.use(bodyParser.urlencoded({
//     extended: false
// }))

// // app engine is handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // we're on port 8080 to appease cloud9
// var port = 8080;
// app.listen(port); // tell me you're listening
// console.log("listening on port: " + port);

// app.use(bodyParser.json());


// // connection to our database
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "eat_burger_db"
// });

// // connect to database
// connection.connect(function(err) {
//   if (err) { // if theres an error, say so
//     console.error("error connecting: " + err.stack);
//     return;
//   } // otherwise what am I connected as
//   console.log("connected as id " + connection.threadId);
// });

// // call to get all the burgers
// app.get('/', function(req,res) {
//     connection.query('SELECT * FROM burgers;', function(err, data) {
//         res.render("index", {burgers: data});
//     })
// })


// // // post your new burger to database
// // app.post('/create', function(req, res) {
// //     connection.query('INSERT INTO burgers (burger) VALUES (?);', [req.body.burger],
// //     function(err, result) {
// //         if (err) throw err;
// //         res.redirect('/');
// //     })
// // })


// // update that you ate the burger
// app.put('/update', function(req, res) {
//     connection.query("UPDATE burgers SET movie = ? WHERE id = ?,", [req.body.burger, req.body.id],
//     function(err, result) {
//         if (err) throw err;
//         res.redirect('/');
//     })
// })


// // throw the burger away
// app.delete('/delete', function(req, res) {
//     connection.query("DELETE FROM burgers WHERE id = ?;", [req.body.id],
//     function(err, results) {
//         if (err) throw err;
//         res.redirect('/');
//     })
// })









// new stuff testing

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 8080;


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
console.log("listening on port: " + port);

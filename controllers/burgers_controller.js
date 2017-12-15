// get express
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// route to get all the burgers
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    }; // log the burgers 
    console.log(hbsObject); // render them to index
    res.render("index", hbsObject);
  });
});


// post a new burger
router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger"
  ], [
    req.body.burger
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});



// if we eat the burger it is now devoured so update its condition
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  // what is the condition of the burger
  console.log("condition", condition);

  burger.update({ // update the codition
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// export to server
module.exports = router;

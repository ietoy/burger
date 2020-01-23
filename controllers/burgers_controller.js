// =========================================================================
// DEPENDENCIES
// =========================================================================
var express = require("express");
var router = express.Router();

// =========================================================================
// IMPORT BURGER MODEL
// =========================================================================
var burger = require("../models/burger.js");

// =========================================================================
// ROUTING
// =========================================================================

// ROOT "GET" ROUTE
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      // this sets our data as the value associated with the key, burgers, for the purposes of using handlebars
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// POST "CREATE" ROUTE
router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    req.body.name
  ], function(result) {
    res.json({ id: result.insertId});
  })
});

// revisit this one ASAP, not sure if I'm passing infomration correctly through the functions
// PUT "UPDATE" ROUTE
router.put("/api/burgers/:id", function (req, res) {
  var devoured = "id = " + req.params.id;
  // console.log("devoured", devoured);
  burger.updateOne({
    // devoured = true
  }, devoured, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
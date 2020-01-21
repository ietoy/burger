var express = require("express");
var burger = require("../models/burger.js");

var  router = express.Router();

// write routes and logic here
// GET ALL BURGERS
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// ADD A NEW BURGER
router.post("/asdfjkl", function (req, res) {

});

// UPDATE BURGER INFO (DEVOUR IT!)
router.put("/asdfjkl", function (req, res) {

});

module.exports = router;
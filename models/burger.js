// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var orm = require("../config/orm");

// ===============================================================================
// BURGER MODEL
// ===============================================================================
var burger = {
    // PER CONVENTION, WE RETAIN THE ORIGINAL FUNCTION NAME AS WE PASS IT FROM THE ORM TO OTHER PORTIONS OF OUR CODE
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    },
    // IN OUR POST AND UPDATE REQUESTS, THIS ALLOWS US TO PASS IN USER DATA AS A PARAMETER TO BE EXECUTED BY OUR ORM
    insertOne: function(vals, cb) {
        orm.insertOne(vals, function(res) {
            console.log(res);
            cb(res);
        })
    },
    updateOne: function(vals, cb) {
        orm.updateOne(vals, function(res) {
            // console.log(res);
            cb(res);
        })
    },
};

module.exports = burger;


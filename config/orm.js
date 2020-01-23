// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var connection = require("./connection.js");

// ===============================================================================
// ORM
// ===============================================================================
var orm = {

    // GET REQUEST
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    // POST REQUEST
    insertOne: function(vals, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // UPDATE REQUEST
    updateOne: function(vals, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;

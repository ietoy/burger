var connection = require("./connection.js");

// may need to revisit query string and connection.query formats when linking with burger.js model
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function(vals, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(vals, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;

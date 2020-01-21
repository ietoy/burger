var connection = require("./connection.js");

var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            // console.log(result)
        })
    },

    insertOne: function(name) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [name], function(err, result) {
            if (err) throw err;
            // console.log(result);
        });
    },

    updateOne: function() {
        // PLACEHOLDER QUERYSTRING
        var queryString = " ";
        // ADD [] FOR INTAKE PARAMETERS B/W QSTRING & FX
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            // PLACEHOLDER WORK
            console.log(result)
        })
    }
};



module.exports = orm;

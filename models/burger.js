var orm = require("./config/orm.js");

// orm.selectAll();

// write remaining orm functions with specific input here

var burger = {
    selectAll: function(cb) {
        orm.selectAll("", function(res) {
            cb(res);
        })
    },
    insertOne: function(cb) {
        orm.insertOne("", function(res) {
            cb(res);
        })
    },
    updateOne: function(cb) {
        orm.updateOne("", function(res) {
            cb(res);
        })
    },
};




module.exports = burger;
var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    },
    insertOne: function(vals, cb) {
        orm.insertOne(vals, function(res) {
            // console.log(res);
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
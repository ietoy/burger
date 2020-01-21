var orm = require("../config/orm");

// orm.selectAll();

// write remaining orm functions with specific input here

var burger = {
    selectAll: function() {
        orm.selectAll(function(res) {
            console.log(res);
            // cb(res);
        })
    },
    insertOne: function() {
        orm.insertOne(function(res) {
            console.log(res)
            // cb(res);
        })
    },
    updateOne: function() {
        orm.updateOne(function(res) {
            console.log(res)
            // cb(res);
        })
    },
};
console.log(burger.selectAll());



module.exports = burger;
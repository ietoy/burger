# burger
A restaurant app that allows users to track which burgers the would like to eat as well as those they have already eaten.

## Introduction
This application allows users to make a list of burgers they would like to eat. Each burger listed appears with a "DEVOUR IT!" button that, once clicked, moves the corresponding burger to the "Burger's Eaten" section of the page.

## Technologies Used
* HTML
* CSS
* JavaScript
* Node.JS
* Express
* Express-Handlebars
* MySQL


## Code Examples
Here is how the application uses an ORM to handle user data and table manipulation.

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

In the above code snippet, we instantiate an ORM to handle the work of querying our SQL database. In the next example, we will hand these functions off to our burger model.

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

The use of this model allows us to pass in user data to our ORM function to inform our SQL queries.

Finally, we reference our Burger model to route these requests based on the user's interaction.

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

    // PUT "UPDATE" ROUTE
    router.put("/api/burgers/:id", function (req, res) {
    var devoured = "id = " + req.params.id;
    burger.updateOne({
    }, devoured, function(result) {
        if (result.changedRows == 0) {
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
    });

    module.exports = router;

Linking these api routes to the client-side JavaScript, we allow the user to invoke the preceeding functions by interacting with elements on the webpage.


## The App in Action!
Direct the user to the deployed application

Include a link to the deployed application using this format
* [See Live Site](deployed-link-goes-here) 

## Authors
Ian Toy
* [GitHub](https://github.com/ietoy)
* [LinkedIn](https://www.linkedin.com/in/ian-toy-265077196/)


## Acknowledgements
Special thanks to our instructor Jerome and especially to our TAs Mahisha and Kerwin for their debugging assistance.
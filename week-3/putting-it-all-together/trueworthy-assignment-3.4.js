/*
============================================
; Title:  trueworthy-assignment-3.4.js
; Author: Lea Trueworthy
; Date:   10 March 2019
; Description: Putting it ALL TOGETHER
;===========================================
*/

// header
const header = require('/Users/leatrueworthy/bu-webdev/web-340/trueworthy-header');
console.log(header.display("Lea" , "Trueworthy" , "Assignment 3.4"));

var express = require("express");
var http = require("http");
var path = require("path");

var logger = require("morgan");

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/product", function(request, response) {

   response.render("product", {

       message: "product page"

   });

});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");

});
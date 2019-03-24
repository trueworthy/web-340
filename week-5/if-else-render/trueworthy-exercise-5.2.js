/*
============================================
; Title:  trueworthy-exercise-5.2.js
; Author: Lea Trueworthy
; Date:   23 March 2019
; Description: Exercise 5.2 - EJS Templates
;===========================================
*/

const header = require('/Users/leatrueworthy/bu-webdev/web-340/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Exercise 5.2"));

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var n = ["Jake", "Calvin", "Dean", "Steven", "Kola"];

app.get("/", function (request, response) {
    response.render("index", {

        name: n

    })

});

http.createServer(app).listen(8080, function () {

    console.log("Application started on port 8080!");

});
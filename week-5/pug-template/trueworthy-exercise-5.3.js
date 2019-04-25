/*
============================================
; Title:  trueworthy-exercise-5.3.js
; Author: Lea Trueworthy
; Date:   24 March 2019
; Description: Exercise 5.3 - Pug Templates
;===========================================
*/

const header = require('/Users/leatrueworthy/bu-webdev/web-340/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Exercise 5.3"));


// statements
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

//set application
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response){

    response.render("index", {

        message: "Welcome to my Homepage! All thanks to Pug!"
    });
});

http.createServer(app).listen(8080, function(){

    console.log("Application has started on port 8080 Hooray!");
});
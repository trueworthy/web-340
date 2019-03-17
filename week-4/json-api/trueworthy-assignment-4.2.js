/*
============================================
; Title:  trueworthy-assignment-4.2.js
; Author: Lea Trueworthy
; Date:   16 March 2019
; Description: JSON API
;===========================================
*/

// header
const header = require('/Users/leatrueworthy/bu-webdev/web-340/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Assignment 4.2"));

var express = require("express");
var http = require("http");
var app = express();

app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({
        firstName: "Lea",
        lastName: "Trueworthy",
        zipCode: "89502",
        employeeId: id
    });

});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
});
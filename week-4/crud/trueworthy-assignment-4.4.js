/*
============================================
; Title:  trueworthy-assignment-4.4.js
; Author: Lea Trueworthy
; Date:   17 March 2019
; Description: Demonstrates CRUD operations in a Node.js API.
;===========================================
*/

// statements
var express = require('express');
var http = require('http');

// use express
var app = express();

// GET
app.get("/", function(req, res) {
  res.send("GET request: received info only.");
});

// PUT
app.put("/", function(req, res) {
  res.send("PUT request: updated existing info.");
});

// POST
app.post("/", function(req, res) {
  res.send("POST request: created new resources.");
});

// DELETE
app.delete("/", function(req, res) {
  res.send("DELETE request: deleted resources.");
});

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080!")
});
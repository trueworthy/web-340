/*
============================================
; Title:  trueworthy-assignment-2.4.js
; Author: Professor Krasso
; Date:   3 March 2019
; Modified By: Lea Trueworthy
; Description: Creates a Node.js server and returns the index.ejs page
;===========================================
*/

// require statements
var http = require('http');
var express = require('express');
var path = require('path');

// set the app
var app = express();

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs'); // tell Express to use the EJS engine

// returns index.ejs page
app.get('/', function(request, response){
  response.render('index', {
    firstName: "Lea",
    lastName: "Trueworthy",
    address: "123 Location st."
  });
});

// create a new server
http.createServer(app).listen(8080, function(){
  console.log("EJS-Views app started on port 8080.");
});

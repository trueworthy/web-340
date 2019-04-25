/*
============================================
; Title:  trueworthy-exercise-2.2.js
; Author: Professor Krasso 
; Date:   24 January 2019
; Modified By: Lea Trueworthy
; Description: Demonstrates how to create a Node.js server
;===========================================
*/ 

var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res) 
{
    console.log('In comes a request to: %s', req.url);
    res.end('Hello World\n');
})

http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);

});
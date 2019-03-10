/*
============================================
; Title:  trueworthy-exercise-3.2.js
; Author: Lea Trueworthy
; Date:   08 March 2019
; Description: Logging
;===========================================
*/

// header
const header = require('/Users/leatrueworthy/bu-webdev/web-340/trueworthy-header');
console.log(header.display("Lea" , "Trueworthy" , "Exercise 3.2"));

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express(); 

app.set('views', path.resolve(__dirname, 'views')) //telling express to look in the views folder
app.set('view engine', 'ejs');

app.use(logger('dev'));

// this is when someone types a slash in the url
app.get('/', function(req, res){
    res.render('index', {
        message: 'Welcome to Lea Trueworthys Logger IF She did it correctly'
    });
})

http.createServer(app).listen(3000, function(){
    console.log('Allication started and listening on port %s', 3000);
});
/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:  March 2019
; Modified By: Lea Trueworthy
; Description: ejs Layout 
: - adding mLab string, mongoose, and Employee model (4/7/19)
; - adding helmet (4/14/19)
;===========================================
*/

//statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var helmet = require("helmet"); // added week 8
var mongoose = require('mongoose');
var Employee = require('./models/employee');

var mongoDB = "mmongodb+srv://admin:admin@ltrueworthy-ems-tt90q.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
    console.log("Application connected to mLab -mongoDB");
});

// application
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));
app.use(helmet.xssFilter());

// model
var employee = new Employee({
    firstName: "Lea",
    lastName: "Trueworthy"
});

// calling the homepage
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Home page'
    });
});

app.get("/", function (req, res) {
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get('/new', function (req, res) {
    res.render('new', {
        title: 'FMS | New'
    });
});

// create server
http.createServer(app).listen(8080, function () {
    console.log('Application started on port 8080! Hooray!')
});
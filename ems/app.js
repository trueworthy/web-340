/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:  March 2019
; Modified By: Lea Trueworthy
; Description: ejs Layout 
: - adding mLab string, mongoose, and Employee model (4/7/19)
; - adding helmet bodyParser cookie and csrf (4/14/19)
;===========================================
*/

//statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var helmet = require("helmet");
var mongoose = require('mongoose');
var Employee = require('./models/employee');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// CSRF setup
var csrfProtection = csrf({ cookie: true });

var mongoDB = "mmongodb+srv://admin:admin@ltrueworthy-ems-tt90q.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
  console.log("Application connected to mLab -mongoDB");
});

// application
var app = express();

// set statements
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// use statements
app.use(logger('short'));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

// model
var employee = new Employee({
    firstName: "Lea",
    lastName: "Trueworthy"
});

// http calls
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home page',
    message: "XSS Prevention Example"
  });
});

app.get('/new', function(req, res) {
  res.render('new', {
    title: 'New Entry',
    message: "New Employee Entry Page"
  });
})

app.post("/process", function(req,res) {
  console.log(req.body.txtName);
  res.redirect("/");
});

// create server
http.createServer(app).listen(8080, function(){
  console.log('Application has started and is listening on port 8080, Hooray!')
});
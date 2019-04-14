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

var Employee = require("./models/employee");

// CSRF setup
var csrfProtection = csrf({ cookie: true });

// application
var app = express();
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Application connected to mLab -mongoDB");
});

// Use statements
app.use(helmet.xssFilter());

app.use(logger("short"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cookieParser());

app.use(csrfProtection);

app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});

var employee = new Employee({
  firstName: "Lea",
  lastName: "Trueworthy"
});

app.set("views", path.resolve(__dirname, "views/"));

app.set("view engine", "ejs");

// use Morgan Login
app.use(logger("short"));

// Styling fix from overstack
app.use(express.static(__dirname + "/public"));

// Routing
app.get("/", function (req, res) {
  res.render("index", {
    title: "Homepage"
  });
});

app.get("/new", function (req, res) {
  res.render("new", {
    title: "New Employee"
  });
});

app.post("/process", function (req, res) {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400).send("Entries require a name");
    return;
  }
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  var newEmployee = console.log(newEmployee);

  // Create model
  var newEmployee = new Employee({
    firstName,
    lastName
  });

  // save
  newEmployee.save(function (error) {
    if (error) throw error;
    console.log(newEmployee + " saved successfully");
  });
  res.redirect("/list");
});

app.get("/list", function (req, res) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;

    res.render("list", {
      title: "Employee List",
      employees: employees
    });
  });
});

// create server
http.createServer(app).listen(8080, function () {
  console.log("Application has started and is listening on port 8080, Hooray!");

});

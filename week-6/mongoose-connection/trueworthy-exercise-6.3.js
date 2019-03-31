/*
============================================
; Title:  trueworthy-exercise-6.3.js
; Author: Lea Trueworthy
; Date:   27 March 2019
; Description: Mongoose Connections
;===========================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://Lea:736173717561746368@ltrueworthy-ems-tt90q.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
    useMongoClient:true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(
    console, "MongoDB connected error: "));
db.once("open", function () {
    console.log("Application connected to mLab -mongoDB");
});

var app = express();
app.use(logger("dev"));

http.createServer(app).listen(8080, function () {
    console.log("Application stated on port 8080");
})
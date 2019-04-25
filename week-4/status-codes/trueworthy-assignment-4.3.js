/*
============================================
; Title:  trueworthy-assignment-4.3.js
; Author: Lea Trueworthy
; Date:   17 March 2019
; Description: HTTP status codes
;===========================================
*/

// statements
var express = require("express");
var http = require("http");

// express
var app = express();

// 404 error
app.get("/not-found", function (req, res) {

    res.status(404);

    res.json({

        error: "Are you lost? Nothing is here!"

    })

});

// 200 error
app.get("/ok", function (req, res) {

    res.status(200);

    res.json({

        message: "Page loaded correctly. Hooray!"

    })

});

// 501 error
app.get("/not-implemented", function (req, res) {

    res.status(501);

    res.json({

        error: "Server does not recognize the request "

    })

});

http.createServer(app).listen(3000, function () {
    console.log("Application started on port 3000!");
});
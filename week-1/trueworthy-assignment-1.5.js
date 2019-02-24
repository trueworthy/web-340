var header = require('/Users/leatrueworthy/bu-webdev/web-340/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Assignment 1.4"));
console.log('\n');

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   24 January 2019
; Modified By: Lea Trueworthy
; Description: Assignment 1.4 - Hello WORLD
;===========================================
*/ 

//requiring http module
var http=require("http");
//creating processRequest function that takes two parameter request and response
function processRequest(req,res){

    var body ="Abandon all hope, ye who enter here"
    var contentLength=body.length;
    res.writeHead(200,{
        'Content-Length':contentLength,
        'Content-Type':'text/plain'
        
    });
    res.end(body);
}
//creating server and sending the processrequest 
var s=http.createServer(processRequest)

//show the server in port 8080
s.listen(8080);

var header = require('/Users/leatrueworthy/bu-webdev/web-340/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Exercise 1.3"));
console.log('\n');

/*
============================================
; Title:  Exercise 1.3
; Author: Professor Krasso 
; Date:   22 January 2019
; Modified By: Lea Trueworthy
; Description: Exercise 1.3 - Modules
;===========================================
*/ 

var url = require('url');  //require statement for URL library
var parsedURL = url.parse("https://www.welcometolea.com/profile?name=Lea");

console.log(parsedURL.protocol); //parsed function used to output parts of string URL
console.log(parsedURL.host);
console.log(parsedURL.query);
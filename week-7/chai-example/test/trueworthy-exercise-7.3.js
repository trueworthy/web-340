/*
============================================
; Title:  trueworthy-exercise-7.3.js
; Author: Professor Krasso 
; Date:   4 April 2019
; Modified By: Lea Trueworthy
; Description: Exercise 7.3 - Chai-example
;===========================================
*/

function fruits(str) {
    return str.split(',');
}

module.exports = fruits;

//Unit Test
var fruits = require("../trueworthy-fruit");
var chai = require("chai");
var assert = chai.assert;
describe("fruits", function () {
    it("should return an array of fruits", function () {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});
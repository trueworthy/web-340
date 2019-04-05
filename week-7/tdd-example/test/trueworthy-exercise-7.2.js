/*
============================================
; Title:  TDD
; Author: Professor Krasso 
; Date:   4 April 2019
; Modified By: Lea Trueworthy
; Description: Exercise 7.2 - TDD example
;===========================================
*/

//statement
var assert = require("assert");

describe("String#split", function () {

    it("should return an array of fruits", function () {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});

function getFruits(str) {

    return str.split(',');

}

module.exports = getFruits;

//end program
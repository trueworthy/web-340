/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   6 April 2019
; Modified By: Lea Trueworthy
; Description: assignment 7.4 - File for the employee database model
;===========================================
*/

// statements
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// employee schema 
var employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

// model
var Employee = mongoose.model("Employee", employeeSchema);

//expose the employee to calling files
module.exports = Employee;
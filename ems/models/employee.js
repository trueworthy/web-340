/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   6 April 2019
; Modified By: Lea Trueworthy
; Description: assignment 7.4 - File for the employee database model
;===========================================
*/

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

// employee model defined
var Employee = mongoose.model("Employee", employeeSchema);

// make module accesible with export
module.exports = Employee;
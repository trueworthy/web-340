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
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// employee Schema
var EmployeeSchema = new Schema({
  firstName: {type: String, require: true},
  lastName: {type: String, require: true}
});

// model
var Employee = mongoose.model("Employee", EmployeeSchema);

//expose the employee to calling files
module.exports = Employee;
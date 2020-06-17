//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var EmployeeModelSchema = new Schema({
    name:String,
	dept:String,
	area:String,
	status:String,
	contact:String,
	salary:String,
  customerFocus:Number,
  Leadership:Number,
  Engagement:Number,
  ProcessApproach:Number,
  Improvement:Number,
  TotalPerformance:Number
});

//Export function to create "Employee" model class
module.exports = mongoose.model('Employee', EmployeeModelSchema );

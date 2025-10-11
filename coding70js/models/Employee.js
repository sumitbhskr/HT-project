const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  
  name: String,
  language: Number,
  city: String,
  isManager: Boolean
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports =  Employee
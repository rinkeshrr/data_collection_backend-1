// updateController.js
const Employee = require('../models/employeeModel');
// const exceljs = require('exceljs');
// const path = require('path');


const updateDetails = async (req, res) => {
  const id = req.params.id;
  const updatedDetails = req.body;

  try {
    // Find the employee in MongoDB
    const employee = await Employee.findOne({ employeeId: id });

    if (employee) {
      // Update the employee details
      employee.name = updatedDetails.name;
      employee.laptopModel = updatedDetails.laptopModel;
      employee.macAddress = updatedDetails.macAddress;
      employee.lastUpdatedDate = new Date().toLocaleString().replace(/,/g, '');
      employee.status = 'active';
      employee.password = updatedDetails.password;

      // Save the changes
      await employee.save();

      console.log('Employee details updated in MongoDB');
      res.status(200).send('Employee details updated successfully');
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    console.error('Error updating employee details in MongoDB:', error);
    res.status(500).send('Error updating employee details');
  }
};


module.exports = { updateDetails };
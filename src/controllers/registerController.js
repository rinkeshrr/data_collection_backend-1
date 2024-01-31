// registerController.js
const Employee = require('../models/employeeModel');
// const exceljs = require('exceljs');
// const path = require('path');


const register = async (req, res) => {
  const { name, employeeId, laptopModel, macAddress, password } = req.body;
  const currentDate = new Date().toLocaleString().replace(/,/g, '');
  const status = 'active';

  try {
    const existingEmployee = await Employee.findOne({ employeeId });

    if (existingEmployee) {
      console.log('Already registered');
      res.status(200).send('Already Registered With This Employee ID');
    } else {
      // Add a new entry to MongoDB using the Employee model
      const newEmployee = new Employee({
        name,
        employeeId,
        laptopModel,
        macAddress,
        createDate: currentDate,
        updateDate: currentDate,
        status,
        password,
      });

      await newEmployee.save();

      console.log('New registration added to MongoDB');
      res.status(200).send('New device registration added successfully');
    }
  } catch (error) {
    console.error('Error updating MongoDB:', error);
    res.status(500).send('Error updating MongoDB');
  }
};

module.exports = { register };

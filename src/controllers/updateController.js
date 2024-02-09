// updateController.js
const Device = require('../models/deviceModel');
// const exceljs = require('exceljs');
// const path = require('path');


const updateDetails = async (req, res) => {
  const id = req.params.id;
  const updatedDetails = req.body;

  try {
    // Find the employee in MongoDB
    const device = await Device.findOne({ _id: id });

    if (device) {
      // Update the employee details
      device.deviceName = updatedDetails.deviceName;
      device.employeeId = updatedDetails.employeeId;
      device.deviceModel = updatedDetails.deviceModel;
      device.operatingSystem = updatedDetails.operatingSystem;
      device.macAddress = updatedDetails.macAddress;
      device.updateDate = new Date().toLocaleString().replace(/,/g, '');

      await device.save();

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
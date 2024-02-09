// registerController.js
const Device = require('../models/deviceModel');
// const exceljs = require('exceljs');
// const path = require('path');


const register = async (req, res) => {
  const { deviceName, employeeId, deviceModel, operatingSystem, macAddress } = req.body;
  const currentDate = new Date().toLocaleString().replace(/,/g, '');
  // const status = 'active';

  try {
      // Add a new entry to MongoDB using the Device model
      const newDevice = new Device({
        deviceName,
        employeeId,
        deviceModel,
        operatingSystem,
        macAddress,
        isActive: 'Y',
        isDeleted: 'N',
        createDate: currentDate,
        updateDate: currentDate
      });

      await newDevice.save();

      console.log('New registration added to MongoDB');
      res.status(200).send('New device registration added successfully');
    // }
  } catch (error) {
    console.error('Error updating MongoDB:', error);
    res.status(500).send('Error updating MongoDB');
  }
};

module.exports = { register };
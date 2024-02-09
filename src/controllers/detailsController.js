// detailsController.js
const Device = require('../models/deviceModel');
// const exceljs = require('exceljs');
// const path = require('path');


const getDetails = async (req, res) => {
  const id = req.params.id;

  try {
    // Retrieve employee details from MongoDB
    const devices = await Device.find({ employeeId: id,  isDeleted: 'N' });
    const details = [];

    if (devices) {
      devices.forEach(element => {
        const deviceDetails = {
          objectId : element._id,
          deviceName: element.deviceName,
          employeeId: element.employeeId,
          deviceModel: element.deviceModel,
          operatingSystem: element.operatingSystem,
          macAddress: element.macAddress,
          registrationDate: element.createDate,
          lastUpdatedDate: element.updateDate,
          status: element.isActive
        };
        details.push(deviceDetails);
      });
      
      res.status(200).send(details);
    } else {
      res.status(404).send('Details not found');
    }
  } catch (error) {
    console.error('Error fetching details from MongoDB:', error);
    res.status(500).send('Error fetching details');
  }
};

module.exports = { getDetails };
// detailsController.js
const Device = require('../models/deviceModel');
// const exceljs = require('exceljs');
// const path = require('path');


const getDetails = async (req, res) => {
  const id = req.params.id;

  try {
    // Retrieve employee details from MongoDB
    const device = await Device.findOne({ _id: id,  isDeleted: 'N' });

    if (device) {
        const details = {
            objectId : device._id,
            deviceName: device.deviceName,
            employeeId: device.employeeId,
            deviceModel: device.deviceModel,
            operatingSystem: device.operatingSystem,
            macAddress: device.macAddress,
            registrationDate: device.createDate,
            lastUpdatedDate: device.updateDate,
            status: device.isActive
        }
      
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
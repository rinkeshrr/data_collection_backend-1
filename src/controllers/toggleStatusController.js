// toggleStatusController.js
const Device = require('../models/deviceModel');
// const exceljs = require('exceljs');
// const path = require('path');


const toggleStatus = async (req, res) => {
  const id = req.params.id;
  // const { status } = req.body;

  try {
    // Find the employee in MongoDB
    const device = await Device.findOne({ _id: id });

    if (device) {
      // Toggle the status and save the changes
      device.isActive === 'Y' ? device.isActive = 'N' : device.isActive = 'Y';
      await device.save();

      console.log(`User status toggled to ${device.isActive === 'Y' ? 'Active' : 'Inactive'} in MongoDB`);
      res.status(200).send(`User status toggled to ${device.isActive === 'Y' ? 'Active' : 'Inactive'} successfully`);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error toggling user status in MongoDB:', error);
    res.status(500).send('Error toggling user status');
  }
};

module.exports = { toggleStatus };
// models/employeeModel.js
const mongoose = require('../db/mongoose');

const deviceSchema = new mongoose.Schema({
  deviceName: String,
  employeeId: String,
  deviceModel: String,
  operatingSystem: String,
  macAddress: String,
  isActive: String,
  isDeleted: String,
  createDate: String,
  updateDate: String,
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
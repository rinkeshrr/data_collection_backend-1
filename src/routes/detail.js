// detailRoutes.js
const express = require('express');
const detailController = require('../controllers/detailController');

const router = express.Router();

router.get('/:id', detailController.getDetails);

module.exports = router;

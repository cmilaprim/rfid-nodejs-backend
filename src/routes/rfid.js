const express = require('express');
const router = express.Router();
const RFIDController = require('../controllers/rfidController');

const rfidController = new RFIDController();

router.get('/', rfidController.handleRFIDRequest.bind(rfidController));

module.exports = router;
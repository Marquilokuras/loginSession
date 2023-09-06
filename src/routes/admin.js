// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

/** Middleware **/
const validateAdmin = require('../middleware/validateAdmin');

router.get('/', validateAdmin , adminController.render); 

module.exports = router;
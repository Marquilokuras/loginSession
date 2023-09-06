// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

/** Middleware **/
const validateAdmin = require('../middleware/validateAdmin');
const upload = require('../middleware/multer');

const {arrValidate,validationSearch } = require('../middleware/validateSearch')

router.get('/', arrValidate, validationSearch, validateAdmin , adminController.render); 

//Registrar Admin
router.get('/create', adminController.formCreate)
router.post('/create', arrValidate, validationSearch, validateAdmin , adminController.createUser); 

module.exports = router;
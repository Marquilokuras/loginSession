const { check, validationResult } = require('express-validator');

const arrValidate = [
    check('user').notEmpty().withMessage('Debes completar este campo')
];

const validationSearch = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty() === true ){
        next()
    }else{
       res.render('index',{ errors: errors.mapped()})
    }
}

module.exports = {
    validationSearch,
    arrValidate
}
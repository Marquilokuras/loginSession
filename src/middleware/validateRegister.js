const { body, validationResult } = require('express-validator');

const arrRegister = [
    body('username').notEmpty().withMessage('Debes ingresar un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes ingresar tu email').bail().isEmail().withMessage('Debes ingresar un formato de email valido'),
    body('password').notEmpty().withMessage('Debes ingresar tu password')
];

const validateRegister = (req, res, next) => {

    const errors = validationResult(req);

    if (errors.isEmpty() === true) {
        next()
    } else {
        res.render('create', { errors: errors.mapped(), old: req.body })
    }
}

module.exports = {
    arrRegister,
    validateRegister
}
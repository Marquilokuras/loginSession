const adminController = {
    render: (req, res) => {
        res.send(`Hola admin: ${req.query.user}`)
    },

    formCreate: (req, res) => {
        res.render('create')
    },

    createUser: (req, res) => {
        res.redirect('/usuarios')
    }
}

module.exports = adminController;
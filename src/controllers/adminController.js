const adminController = {
    render: (req,res) => {
        res.send(`Hola admin: ${req.query.user}`)
    }
}

module.exports = adminController;
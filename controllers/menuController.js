const models = require('../models')
const Menu = models.menu

exports.index = (req, res) => {
    Menu.findAll({
        
    }).then(menus=>res.send(menus))
}
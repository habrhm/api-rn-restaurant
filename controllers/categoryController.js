const models = require('../models')
const Category = models.category

exports.index = (req, res) => {
    Category.findAll({
        
    }).then(categories=>res.send(categories))
}
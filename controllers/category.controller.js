const model = require('../models');

class Categories {
    static async getAllCategories(req, res) {
        try {
            const category = await model.category.findAll();
            res.status(200).json({status: "success", data: category})
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: "failed", message: 'Internal server error!'});
        }
    }
};


module.exports = Categories;
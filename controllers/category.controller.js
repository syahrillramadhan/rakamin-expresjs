const model = require('../models');

class Categories {
    static async getAllCategories(req, res) {
        try {
            const data = await model.category.findAll();
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.json({ message: 'anjay error' });
        }
    }
};

module.exports = Categories;
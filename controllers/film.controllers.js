// handle req, res, dan validasi
const model = require('../models');

class Film {
    static async getAllFilms(req, res) {
        try {
            const data = await model.film.findAll();
            res.status(200).json({status: "success", data: data})
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: "500", message: 'Internal server error!' });
        }
    }

    static async getFilmById(req, res) {
        try {
            const id = req.params.id
            const data = await model.film.findByPk(id)

            if (!data) {
                res.status(404).json({
                    status: "404",
                    message: 'Film not found'
                })
            } else {
                res.status(200).json({status: "success",data: data})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: "500",message: 'Internal server error!' });
        }
    }

    static async getFilmByCategory(req, res) {
        const categoryName = req.query.search ? req.query.search.toLowerCase() : null;

        if (!categoryName) {
            return res.status(400).json({ status: "404", message: "masukin categorynya kayak gini: /films/category?search=(nama category film)" });
        }

        try {
            const data = await model.film.findAll({
                include: [{
                    model: model.category,
                    where: model.sequelize.where(
                        model.sequelize.fn('LOWER', model.sequelize.col('name')),
                        categoryName
                    ),
                    through: { attributes: [] }
                }]
            });

            if (data.length === 0) {
                res.json({
                    status: "200",
                    message: "Film not found"
                });
            } else {
                res.status(200).json(data)
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({status: "500", message: "Internal server error!"})
        }
    }
}

module.exports = Film;
// handle req, res, dan validasi
const model = require('../models');

class Film {
    static async getAllFilms(req, res) {
        try {
            const data = await model.film.findAll();
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.json({ message: 'Tidack bisa menampilkan data semua film, coba cek console errornya!' });
        }
    }

    static async getFilmById(req, res) {
        try {
            const id = req.params.id
            const data = await model.film.findByPk(id)

            if (!data) {
                res.status(404).json({
                    message: 'id-nya antara kurang atau kebanyakan, coba yang bener'
                })
            } else {
                res.status(200).json(data)
            }
        } catch (error) {
            console.log(error);
            res.json({ message: 'intinya sih ini pesan error bwang' });
        }
    }

    static async getFilmByCategory(req, res) {
        const categoryName = req.query.search ? req.query.search.toLowerCase() : null;

        if (!categoryName) {
            return res.status(400).json({ message: "masukin categorynya kayak gini: /films/category?search=(nama category film)" });
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
                    message: "Ga ada film aneh-aneh disini bambank!"
                });
            } else {
                res.status(200).json(data)
            }
        } catch (error) {
            console.log(error);
            res.json({ message: 'anjay error' });
        }
    }
}

module.exports = Film;
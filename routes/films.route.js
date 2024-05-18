const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/film.controllers');

router.get('/category', filmsController.getFilmByCategory);
router.get('/:id', filmsController.getFilmById);            
router.get('/', filmsController.getAllFilms);

module.exports = router;

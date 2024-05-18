const express = require('express');
const router = express.Router();
const filmsRoutes = require('./films.route');
const categoriesRoutes = require('./categories.route');

router.use('/films', filmsRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;

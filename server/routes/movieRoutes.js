const express = require('express');
const { getTrendingMovies } = require('../controllers/movieController');

const router = express.Router();

router.get('/trending', getTrendingMovies);

module.exports = router;
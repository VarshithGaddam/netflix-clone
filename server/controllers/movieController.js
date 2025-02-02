const axios = require('axios');

const TMDB_API_KEY = '4aa4afd8d28969445e26feb9de27aa02'; // Your TMDB API key

const getTrendingMovies = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
    );
    res.json({ results: response.data.results });
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    res.status(500).json({ error: 'Failed to fetch trending movies' });
  }
};

const getTopRatedMovies = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`
    );
    res.json({ results: response.data.results });
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    res.status(500).json({ error: 'Failed to fetch top-rated movies' });
  }
};

const getActionMovies = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`
    );
    res.json({ results: response.data.results });
  } catch (error) {
    console.error('Error fetching action movies:', error);
    res.status(500).json({ error: 'Failed to fetch action movies' });
  }
};

module.exports = { getTrendingMovies, getTopRatedMovies, getActionMovies };
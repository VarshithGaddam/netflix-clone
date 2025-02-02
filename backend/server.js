const express = require('express');
const app = express();

// Hardcoded movie data
const trendingMovies = [
  {
    Title: "Inception",
    Year: "2010",
    imdbID: "tt1375666",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    imdbID: "tt0468569",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    imdbID: "tt0816692",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  }
];

const topRatedMovies = [
  {
    Title: "The Shawshank Redemption",
    Year: "1994",
    imdbID: "tt0111161",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
  },
  {
    Title: "The Godfather",
    Year: "1972",
    imdbID: "tt0068646",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  }
];

const actionMovies = [
  {
    Title: "Mad Max: Fury Road",
    Year: "2015",
    imdbID: "tt1392190",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "John Wick",
    Year: "2014",
    imdbID: "tt2911666",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
  }
];

// Fetch trending movies
app.get('/api/trending', async (req, res) => {
  try {
    console.log('Returning hardcoded trending movies'); // Log the response
    res.json(trendingMovies);
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch top-rated movies
app.get('/api/top-rated', async (req, res) => {
  try {
    console.log('Returning hardcoded top-rated movies'); // Log the response
    res.json(topRatedMovies);
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch action movies
app.get('/api/action', async (req, res) => {
  try {
    console.log('Returning hardcoded action movies'); // Log the response
    res.json(actionMovies);
  } catch (error) {
    console.error('Error fetching action movies:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 
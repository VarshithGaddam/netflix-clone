app.get('/api/movies', async (req, res) => {
  try {
    const movies = await getMoviesFromDatabase(); // Example function
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/top-rated', async (req, res) => {
  try {
    const topRatedMovies = await getTopRatedMovies(); // Example function
    res.json(topRatedMovies);
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    res.status(500).send('Internal Server Error');
  }
}); 
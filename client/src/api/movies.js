import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const response = await axios.get('/api/movies');
    if (response.data && typeof response.data === 'object') {
      return response.data; // Ensure the response is valid JSON
    } else {
      throw new Error('Invalid JSON response');
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get('/api/trending');
    console.log('Trending Movies Data:', response.data); // Log the response
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get('/api/top-rated');
    console.log('Top Rated Movies Data:', response.data); // Log the response
    return response.data;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    throw error;
  }
};

export const fetchActionMovies = async () => {
  try {
    const response = await axios.get('/api/action');
    console.log('Action Movies Data:', response.data); // Log the response
    return response.data;
  } catch (error) {
    console.error('Error fetching action movies:', error);
    throw error;
  }
}; 
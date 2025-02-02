const db = require('../config/db');

class Movie {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.poster_path = data.poster_path;
    this.trending = data.trending || false;
  }

  static async create(data) {
    const movieRef = await db.collection('movies').add(data);
    return movieRef.id;
  }
}

module.exports = Movie;
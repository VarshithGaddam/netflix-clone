import React from 'react';
import './Row.css';

const Row = ({ title }) => {
  // Hardcoded movie data for each category
  const movies = {
    trending: [
      {
        Title: "RRR",
        Year: "2022",
        imdbID: "tt8178634",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Rank: "Top 1"
      },
      {
        Title: "KGF: Chapter 2",
        Year: "2022",
        imdbID: "tt10698680",
        Type: "movie",
        Poster: "https://1.bp.blogspot.com/-l01GIldlZ5g/XpWfOqgZZBI/AAAAAAAAugA/bQ3b6vItB_gIHgOjfIUdv7NKGqzOGgc0ACNcBGAsYHQ/s1600/KGF-Chapter-2-Poster-5.jpg",
        Rank: "Top 2"
      },
      {
        Title: "Avatar: The Way of Water",
        Year: "2022",
        imdbID: "tt1630029",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
        Rank: "Top 3"
      },
      {
        Title: "Lucky Bhaskar",
        Year: "2023",
        imdbID: "tt15428137", // Replace with actual IMDb ID if available
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjlhMDZmMmYtYTkwYi00ZDMwLWFkZTEtZTczMDdlNmZlMGQ4XkEyXkFqcGc@._V1_QL75_UX210_.jpg" // Replace with actual poster URL
      },
      {
        Title: "Top Gun: Maverick",
        Year: "2022",
        imdbID: "tt1745960",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
      },
      {
        Title: "Devara",
        Year: "2024",
        imdbID: "tt15428138", // Replace with actual IMDb ID if available
        Type: "movie",
        Poster: "https://image.tmdb.org/t/p/original/8FBhil5ZwTT3PP0l15jyWicoxHQ.jpg" // Replace with actual poster URL
      },
      {
        Title: "Dangal",
        Year: "2016",
        imdbID: "tt5074352",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg"
      },
      {
        Title: "Laapataa Ladies",
        Year: "2023",
        imdbID: "tt15428136", // Replace with actual IMDb ID if available
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BZTkxMjg1MWEtZjI4Mi00MzBmLTlhZjMtY2EwNzhkZWMyNzc5XkEyXkFqcGc@._V1_QL75_UX246_.jpg" // Replace with actual poster URL
      },
      {
        Title: "Mission: Impossible - Fallout",
        Year: "2018",
        imdbID: "tt4912910",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_SX300.jpg"
      },
      {
        Title: "Baahubali 2: The Conclusion",
        Year: "2017",
        imdbID: "tt4849438",
        Type: "movie",
        Poster: "https://4.bp.blogspot.com/-J0jRqTZXdyE/WMUZQceAoaI/AAAAAAAAEZQ/z95hgTIHuSU5K76CFFEM6XriF1fQwzhTwCLcB/s1600/bahubali2-new%2Bposter-prabhas-katappa.jpg"
      }
    ],
    topRated: [
      {
        Title: "The Shawshank Redemption",
        Year: "1994",
        imdbID: "tt0111161",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
      },
      {
        Title: "Baahubali: The Beginning",
        Year: "2015",
        imdbID: "tt2631186",
        Type: "movie",
        Poster: "https://pics.filmaffinity.com/baahubali_the_beginning_aka_bahubali_the_beginning-900544670-large.jpg"
      },
      {
        Title: "The Godfather",
        Year: "1972",
        imdbID: "tt0068646",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        Title: "Dangal",
        Year: "2016",
        imdbID: "tt5074352",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg"
      },
      {
        Title: "The Dark Knight",
        Year: "2008",
        imdbID: "tt0468569",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
      },
      {
        Title: "Uppena",
        Year: "2021",
        imdbID: "tt11304740",
        Type: "movie",
        Poster: "https://popcornreviewss.com/wp-content/uploads/2021/04/Uppena-2021-Telugu-Romantic-Movie-review.jpg" // Replace with actual poster URL
      },
      {
        Title: "Lucky Bhaskar",
        Year: "2023",
        imdbID: "tt15428137", // Replace with actual IMDb ID if available
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjlhMDZmMmYtYTkwYi00ZDMwLWFkZTEtZTczMDdlNmZlMGQ4XkEyXkFqcGc@._V1_QL75_UX210_.jpg" // Replace with actual poster URL
      },
    
      {
        Title: "3 Idiots",
        Year: "2009",
        imdbID: "tt1187043",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        Title: "Lagaan: Once Upon a Time in India",
        Year: "2001",
        imdbID: "tt0169102",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      }
    ],
    action: [
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
      },
      {
        Title: "War",
        Year: "2019",
        imdbID: "tt7430722",
        Type: "movie",
        Poster: "https://wallpapers.com/images/hd/hrithik-roshan-war-movie-release-s461ezcmt0ef7360.jpg"
      },
      {
        Title: "Mission: Impossible - Fallout",
        Year: "2018",
        imdbID: "tt4912910",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_SX300.jpg"
      },
      {
        Title: "Baahubali 2: The Conclusion",
        Year: "2017",
        imdbID: "tt4849438",
        Type: "movie",
        Poster: "https://4.bp.blogspot.com/-J0jRqTZXdyE/WMUZQceAoaI/AAAAAAAAEZQ/z95hgTIHuSU5K76CFFEM6XriF1fQwzhTwCLcB/s1600/bahubali2-new%2Bposter-prabhas-katappa.jpg"
      },
      {
        Title: "RRR",
        Year: "2022",
        imdbID: "tt8178634",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
      },
      {
        Title: "KGF: Chapter 2",
        Year: "2022",
        imdbID: "tt10698680",
        Type: "movie",
        Poster: "https://1.bp.blogspot.com/-l01GIldlZ5g/XpWfOqgZZBI/AAAAAAAAugA/bQ3b6vItB_gIHgOjfIUdv7NKGqzOGgc0ACNcBGAsYHQ/s1600/KGF-Chapter-2-Poster-5.jpg"
      },
      {
        Title: "Vikram",
        Year: "2022",
        imdbID: "tt9179430",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
      },
      {
        Title: "Mr. Bachchan",
        Year: "2023",
        imdbID: "tt15428133", // Replace with actual IMDb ID if available
        Type: "movie",
        Poster: "https://image.tmdb.org/t/p/original/6rgai1V5HYzhY8Ju8UwM87hI0l1.jpg" // Replace with actual poster URL
      },
      {
        Title: "Dangal",
        Year: "2016",
        imdbID: "tt5074352",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg"
      }
    ]
  };

  // Select the movie list based on the title
  let movieList = [];
  if (title === "Trending Now") {
    movieList = movies.trending;
  } else if (title === "Top Rated Movies") {
    movieList = movies.topRated;
  } else if (title === "Action Movies") {
    movieList = movies.action;
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movieList.map((movie, index) => (
          <div key={movie.imdbID} className="row__poster">
            {movie.Rank && <span className="row__rank">{movie.Rank}</span>}
            <img
              src={movie.Poster}
              alt={movie.Title}
            />
            <p className="row__posterTitle">{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
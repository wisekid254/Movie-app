
import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=87c4e04f3c412151a3bcadba9a5dd119"
      );
      const data = await response.json();
      console.log(data); // should show { results: [...] }
      setMovies(data.results);
    } catch (err) {
      console.error("Failed to fetch movies", err);
    }
  };

  return (
    <div>
      <section className="movie_list">
        <header className="align_center movie_list_header">
          <h2 className="align_center movie_list_heading">
            popular <img src={Fire} alt="fire_emoji" className="navbar_emoji" />
          </h2>
          <div className="align_center movie_list_filter">
            <ul className="align_center movie_filter">
              <li className="movie_filter_item active">8+ star</li>
              <li className="movie_filter_item">7+ star</li>
              <li className="movie_filter_item">6+ star</li>
            </ul>
            <select className="movie_sorting">
              <option value="">Sort By</option>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </select>
            <select className="movie_sorting">
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </div>
        </header>
        <div className="movie_cards">
          {movies && movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieList;

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie?api_key=9bc88fa03fff2b8efcc82b7e4e1a5255"
    );
    const data = await response.json();
    setMovies(data.results);
  };
  return (
    <div>
      <section className="movie_list">
        <header className="align_center movie_list_header">
          <h2 className="align_center movie_list_heading">
            popular <img src={Fire} alt="fire_emoji" className="navbar_emoji" />
          </h2>
          <div className="align_center movie_list_filter">
            <ul className="align_center movie_filter ">
              {" "}
              <li className="movie_filter_item active">8+ star</li>
              <li className="movie_filter_item">7+ star</li>
              <li className="movie_filter_item">6+ star</li>
            </ul>
            <select name="" id="" className="movie_sorting">
              {" "}
              <option value="">Sort By</option> <option value="">Date</option>{" "}
              <option value="">Rating</option>{" "}
            </select>
            <select name="" id="" className="movie_sorting">
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </div>
        </header>
        <div className="movie_cards">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieList;

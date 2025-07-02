import React from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div>
      <section className="movie_list">
        <header className="align_center movie_list_header">
          <h2 className="align_center movie_list_heading">
            popular <img src={Fire} alt="fire_emoji" className="navbar_emoji" />
          </h2>
          <div className="align_center movie_list_filter">
            <ul className="align_center movie_filter ">
              <li className="movie_filter_item active">8+ star</li>
              <li className="movie_filter_item">7+ star</li>
              <li className="movie_filter_item">6+ star</li>
            </ul>
            <select name="" id="" className="movie_sorting">
              <options>Sort By</options>
              <options>Date</options>
              <options>Rating</options>
            </select>
            <select name="" id="" className="movie_sorting">
              <options>Ascending</options>
              <options>Descending</options>
            </select>
          </div>
        </header>
        <div className="movie_cards">
          <MovieCard />
        </div>
      </section>
    </div>
  );
};

export default MovieList;

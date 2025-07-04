import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({movie}) => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png"
        alt="Movie poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.rate_average} <img src={Star} alt="rating icon" className="card_emoji " />
          </p>
        </div>
        <p className="movie_description">
        {movie.overview}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
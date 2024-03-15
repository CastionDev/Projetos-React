import React from 'react';
import { Link } from "react-router-dom";
import StarHalfIcon from '@mui/icons-material/StarHalf';

const MovieCard = ({ movie, showLink = true }) => {
  const imagesURL = `https://image.tmdb.org/t/p/w500/`;
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <StarHalfIcon /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/Filmes/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  TrendingUp,
  MonetizationOn,
  Schedule,
  Description,
} from "@mui/icons-material";
import MovieCard from "../components/MovieCard";
import "./Filmes.css";
import Axios from 'axios';

const apiKey = '1e50d5f703e0846452aa8b862806156c';
const moviesURL = 'https://api.themoviedb.org/3/movie/';

const Filmes = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    try {
      const response = await Axios.get(url);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <MonetizationOn /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <TrendingUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <Schedule /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <Description /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Filmes;
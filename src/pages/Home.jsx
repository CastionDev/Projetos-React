import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Home.css";
import Filmes from "./Filmes";
import Axios from 'axios';

const apiKey = '1e50d5f703e0846452aa8b862806156c';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await Axios.get(url);
    setTopMovies(res.data.results);
  };

  useEffect(() => {
    const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Filmes mais avaliados: </h2>
      <div className="movies-container">
        {
        topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}  />)
        }
        <Filmes />
      </div>
    </div>
  );
};

export default Home;

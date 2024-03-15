import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./Home.css";
import Axios from 'axios';

const apiKey = '1e50d5f703e0846452aa8b862806156c'
const pesquisaURL = 'https://api.themoviedb.org/3/search/multi';

const Pesquisar = () => {
  const [ id ] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = id.get("q");

  const getSearchedMovies = async (url) => {
    const options = {
      method: 'GET',
      url: url,
      params: {
        include_adult: 'false',
        language: 'pt-BR',
        page: '1',
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };
    try {
      const response = await Axios.request(options);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error); 
    }
  };
  
  useEffect(() => {
    const chamarApi = `${pesquisaURL}?api_key=${apiKey}&query=${query}&language=pt-BR`
    getSearchedMovies(chamarApi);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
export default Pesquisar;
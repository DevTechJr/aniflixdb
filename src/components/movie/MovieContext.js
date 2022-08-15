import { createContext, useReducer, useState } from "react";
import { useContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [movie, setMovie] = useState("");
  const [movieInput, setMovieInput] = useState(null);

  // set alert
  const getMovies = async (movieInput) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "64221a0798msh645636fe090b535p10ece0jsna9e0ae35c6d6",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    fetch(
      `https://moviesdatabase.p.rapidapi.com/titles/search/title/${movieInput}?info=base_info&limit=50&page=1&titleType=movie`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setMovieInput(movieInput);
      })
      .catch((err) => alert(err));
  };

  return (
    <MovieContext.Provider
      value={{
        getMovies,
        movie: movie,
        movies: movies,
        movieInput: movieInput,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;

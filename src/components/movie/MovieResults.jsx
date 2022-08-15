import React from "react";
import { useContext } from "react";
import MovieContext from "./MovieContext";
import MovieCard from "./MovieCard";
const MovieResults = () => {
  const { movies, movieInput } = useContext(MovieContext);

  if (movies) {
    return (
      <>
        <h1 className="font-bold text-2xl hover:text-yellow-700 mt-5 text-yellow-800">
          Results For "{movieInput}" :
        </h1>
        <div className="flex flex-wrap w-full">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </>
    );
  }
};

export default MovieResults;

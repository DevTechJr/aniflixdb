import React from "react";
import MovieResults from "../components/movie/MovieResults";
import MovieSearch from "../components/movie/MovieSearch";
const Home = () => {
  return (
    <div class="border bg-base-300 w-5/6 text-center">
      <div class="flex flex-col justify-evenly items-center h-full px-4 py-16 bg-base-200">
        <MovieSearch />
        <MovieResults />
      </div>
    </div>
  );
};

export default Home;

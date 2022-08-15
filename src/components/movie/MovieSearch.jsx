import React, { useState } from "react";
import { useContext } from "react";
import MovieContext from "./MovieContext";

const MovieSearch = () => {
  const [text, setText] = useState("");
  const { getMovies } = useContext(MovieContext);

  const changeText = (e) => {
    console.log(text);
    setText(e.target.value);
  };
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length == 0) {
      alert("There is no input here!");
      setText("");
    } else {
      getMovies(text);
      setText("");
    }
  };
  //return
  return (
    <div className="w-2/3 bg-white bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg p-5 flex justify-between flex-col">
      <h2 class="text-center text-2xl text-yellow-600 font-bold hover:text-yellow-400 my-5">
        Search For A Movie Below :
      </h2>
      <form class="form-control">
        <div class="input-group flex justify-center">
          <input
            type="text"
            onChange={changeText}
            placeholder="e.g. Avengers Endgame"
            class="input input-bordered w-3/4"
          />
          <button class="btn btn-square" onClick={handleSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieSearch;

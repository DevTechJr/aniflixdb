import React from "react";
import GenreList from "./GenreList";
import {
  FaLine,
  FaStar,
  FaUsers,
  FaPlay,
  FaClock,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const movieTime = movie?.runtime?.seconds / 60 + " Minutes";
  return (
    <div className="card w-1/3 movieCard p-5 bg-slate-200">
      <div class="card bg-base-100 shadow-xl pt-5">
        <figure>
          <img
            src={
              movie.primaryImage?.url ||
              "https://www.nicepng.com/png/detail/107-1070734_png-to-movie-lets-go-to-the-movies.png"
            }
            alt="Shoes"
            class="w-32 h-auto rounded hover:border-double hover:border-4 hover:border-amber-300"
          />
        </figure>
        <div class="card-body flex flex-col items-center justify-center">
          <h2 class="card-title">{movie.titleText.text}</h2>
          {console.log(movie)}
          <div class="ratings flex w-full justify-between items-center bg-amber-300 text-white rounded p-2">
            <h1 className="flex items-center">
              {movie?.ratingsSummary?.aggregateRating}/10{" "}
              {<FaStar style={{ marginLeft: "5px" }} />}
            </h1>

            <h1 className="flex items-center">
              {movie?.ratingsSummary?.voteCount} Votes{" "}
              {<FaUsers style={{ marginLeft: "5px" }} />}{" "}
            </h1>
          </div>
          {<GenreList genres={movie?.genres?.genres} />}

          <p className="overflowText w-5/6">
            {movie.plot?.plotText?.plainText ||
              "Oops! No Synopsis For This One!"}
          </p>

          <div class="card-actions justify-end">
            <div class="ratings flex w-full justify-evenly items-center text-slate-600 rounded p-2">
              <h1 className="flex items-evenly badge badge-outline">
                Released in {movie?.releaseYear?.year || "idk"}{" "}
                {<FaClock style={{ marginLeft: "5px" }} />}
              </h1>

              <h1 className="flex items-evenly badge badge-outline">
                {movieTime || "no runtime info"}{" "}
                {<FaPlay style={{ marginLeft: "5px" }} />}{" "}
              </h1>
            </div>
          </div>
          <button class="btn p-2 w-1/2 glass bg-amber-400  hover:border-double border-4 hover:border-yellow-400">
            <Link
              to="/"
              className="text-white hover:text-black flex items-center"
            >
              More Info...
              <FaExternalLinkAlt style={{ marginLeft: "10px" }} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

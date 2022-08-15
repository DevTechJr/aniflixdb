import React from "react";

const GenreList = ({ genres }) => {
  try {
    return (
      <div className="flex w-5/6 flex-wrap justify-evenly items-center">
        {genres.map((genre) => (
          <div class="badge badge-secondary my-2">{genre.text}</div>
        ))}
      </div>
    );
  } catch (err) {}
};

export default GenreList;

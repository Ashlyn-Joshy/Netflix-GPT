import React from "react";

const MovieCard = ({ poster }) => {
  return (
    <div>
      <img
        className="w-52 h-40 pr-3"
        src={poster.imageSet.verticalPoster.w720}
        alt="nowPlayingMoviePoster"
      />
    </div>
  );
};

export default MovieCard;

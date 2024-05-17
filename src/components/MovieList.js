import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  return (
    <div className="p-6 ">
      <h1 className="font-bold text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {data?.map((movie) => (
            <MovieCard key={movie.id} poster={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SuggestionMovies = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-10 pl-12">
          <MovieList title={"Now Playing"} data={movies.nowPlaying} />
          <MovieList title={"Top Rated"} data={movies.nowPlaying} />
          <MovieList title={"Action & Adventure"} data={movies.nowPlaying} />
          <MovieList title={"Classic"} data={movies.nowPlaying} />
          <MovieList title={"Comedies"} data={movies.nowPlaying} />
          <MovieList title={"Documentaries"} data={movies.nowPlaying} />
          <MovieList title={"Horror"} data={movies.nowPlaying} />
        </div>
      </div>
    )
  );
};

export default SuggestionMovies;

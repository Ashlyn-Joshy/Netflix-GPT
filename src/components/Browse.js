import React from "react";
import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";
import HeroMovie from "./HeroMovie";
import SuggestionMovies from "./SuggestionMovies";

const Browse = () => {
  useNowPlaying();

  return (
    <>
      <Header />
      <HeroMovie />
      <SuggestionMovies />
    </>
  );
};

export default Browse;

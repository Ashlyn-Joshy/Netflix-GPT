import React from "react";
import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";
import HeroMovie from "./HeroMovie";
import SuggestionMovies from "./SuggestionMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlaying();
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <HeroMovie />
          <SuggestionMovies />
        </>
      )}
    </>
  );
};

export default Browse;

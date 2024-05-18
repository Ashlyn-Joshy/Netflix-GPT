import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchButton from "./GptSearchButton";

const GptSearch = () => {
  return (
    <div className="bg-black text-white">
      <GptSearchButton />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;

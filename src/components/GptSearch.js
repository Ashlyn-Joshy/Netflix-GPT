import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchButton from "./GptSearchButton";
import { Body_Image } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="text-white">
      <div className="absolute -z-10">
        <img alt="bgImage" src={Body_Image} />
      </div>
      <GptSearchButton />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;

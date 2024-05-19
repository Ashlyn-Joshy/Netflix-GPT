import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchButton = () => {
  const languageKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceholder}
          className="col-span-9 p-2 text-black"
        />
        <button className="p-2 col-span-3 bg-red-600 rounded">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchButton;

import React from "react";

const GptSearchButton = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="what do you like to watch"
          className="col-span-9 p-2"
        />
        <button className="p-2 col-span-3 bg-red-600 rounded">Search</button>
      </form>
    </div>
  );
};

export default GptSearchButton;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-32 pt-[25%] absolute text-white bg-gradient-to-r from-black aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-6 rounded">Play</button>
        <button className="bg-black text-white py-2 px-6 rounded mx-2 bg-opacity-15">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

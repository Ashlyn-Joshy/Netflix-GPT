import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";

const Browse = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

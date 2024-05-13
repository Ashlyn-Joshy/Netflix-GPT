import React, { useEffect } from "react";
import Header from "./Header";
import { api_options, api_url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../redux/MovieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const getShowByFilter = async () => {
    const response = await fetch(api_url, api_options);
    const data = await response.json();
    console.log(data.shows);
    dispatch(addNowPlayingMovie(data.shows));
  };

  useEffect(() => {
    getShowByFilter();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

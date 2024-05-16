import { useEffect } from "react";
import { api_options, api_url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../redux/MovieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const getShowByFilter = async () => {
    const response = await fetch(api_url, api_options);
    const data = await response.json();
    dispatch(addNowPlayingMovie(data.shows));
  };

  useEffect(() => {
    getShowByFilter();
  }, []);
};

export default useNowPlaying;

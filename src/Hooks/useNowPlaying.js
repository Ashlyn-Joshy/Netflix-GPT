import { useEffect } from "react";
import { api_options, api_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../redux/MovieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const nowPlayingMOvies = useSelector((store) => store.movies.nowPlaying);

  const getShowByFilter = async () => {
    const response = await fetch(api_url, api_options);
    const data = await response.json();
    dispatch(addNowPlayingMovie(data.shows));
  };

  useEffect(() => {
    !nowPlayingMOvies && getShowByFilter();
  }, []);
};

export default useNowPlaying;

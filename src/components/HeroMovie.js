import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import BannerBackground from "./BannerBackground";

const HeroMovie = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);
  if (!movies) return;
  const mainMovie = movies[0];

  const { originalTitle, overview, imageSet } = mainMovie;

  return (
    <div>
      <VideoTitle title={originalTitle} overview={overview} />
      <BannerBackground banner={imageSet.horizontalPoster.w720} />
    </div>
  );
};

export default HeroMovie;

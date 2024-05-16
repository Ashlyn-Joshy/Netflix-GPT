import React from "react";

const BannerBackground = ({ banner }) => {
  return (
    <>
      <img
        className="w-screen aspect-video"
        src={banner}
        alt="heroMovieBanner"
      />
    </>
  );
};

export default BannerBackground;

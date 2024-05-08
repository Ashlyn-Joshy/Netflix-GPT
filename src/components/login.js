import React from "react";
import Header from "./Header";

const login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bodyImage"
        />
      </div>
      <form className="w-3/12 absolute text-white bg-black my-48 mx-auto left-0 right-0 p-12 opacity-80">
        <h1 className="text-3xl font-bold py-5">Sign In</h1>
        <input className="w-full my-2 p-2" type="email" placeholder="Email" />
        <input
          className="w-full my-2 p-2"
          type="password"
          placeholder="password"
        />
        <button className="w-full p-2 my-4 bg-red-700">Sign In</button>
      </form>
    </div>
  );
};

export default login;

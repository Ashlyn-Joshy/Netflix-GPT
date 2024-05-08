import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogInForm, setIsLogInForm] = useState(true);

  const signUp = () => {
    setIsLogInForm(!isLogInForm);
  };

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
        <h1 className="text-3xl font-bold py-5">
          {isLogInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isLogInForm && (
          <input type="text" className="w-full my-2 p-2" placeholder="Name" />
        )}

        <input className="w-full my-2 p-2" type="email" placeholder="Email" />

        <input
          className="w-full my-2 p-2"
          type="password"
          placeholder="password"
        />

        <button className="w-full p-2 my-4 bg-red-700">
          {isLogInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-2 cursor-pointer" onClick={signUp}>
          {isLogInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

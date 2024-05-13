import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { User_Logo, Body_Image } from "../utils/constants";

const Login = () => {
  const [isLogInForm, setIsLogInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const signUp = () => {
    setIsLogInForm(!isLogInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const formSubmit = () => {
    const msg = checkValidation(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(msg);

    if (!isLogInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: email.current.value,
            photoURL: User_Logo,
          })
            .then(() => {
              // Profile updated! with display name and photo url
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Body_Image} alt="bodyImage" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute text-white bg-black my-48 mx-auto left-0 right-0 p-12 opacity-80"
      >
        <h1 className="text-3xl font-bold py-5">
          {isLogInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isLogInForm && (
          <input
            type="text"
            className="w-full my-2 p-2 text-black"
            placeholder="Name"
            ref={name}
          />
        )}

        <input
          className="w-full my-2 p-2 text-black"
          type="email"
          placeholder="Email"
          ref={email}
        />

        <input
          className="w-full my-2 p-2 text-black"
          type="password"
          placeholder="password"
          ref={password}
        />

        <p className="text-red-700 font-bold">{errorMessage}</p>

        <button className="w-full p-2 my-4 bg-red-700" onClick={formSubmit}>
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

import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../redux/userSlice";
import { Netflix_logo, supported_Languages } from "../utils/constants";
import { toggleGptSearchView } from "../redux/GptSlice";
import { changeLanguage } from "../redux/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  const singOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const gptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // when component is unmounts
  }, []);

  const languageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="bg-gradient-to-b from-black px-32 py-3 absolute z-10 w-full flex justify-between text-white">
      <img className="w-44" src={Netflix_logo} alt="logo" />
      {user && (
        <div className="flex">
          {showGpt && (
            <select
              className="bg-red-600 text-white my-4 rounded"
              onClick={languageChange}
            >
              {supported_Languages.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button className="p-2 m-4 rounded bg-red-600 " onClick={gptSearch}>
            {showGpt ? "Home" : "GPT Search"}
          </button>

          <img className="w-12 h-12 my-4" src={user.photoURL} alt="userImg" />

          <button onClick={singOut} className="bg-red-600 p-2 rounded m-4">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

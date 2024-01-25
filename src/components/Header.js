import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { DEFAULT_AVATAR, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispath = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  const handleGptSearchClick = () => {
    // toggle gpt search
    dispath(toggleGptSearchView());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispath(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispath(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleLanguageChange = (e) => {
    dispath(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute px-24 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img src={LOGO} alt="logo" className="w-44" />
      {user && (
        <div className="flex align-middle">
          <select className="px-2 mr-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
            ))}
          </select>
          <button className="bg-white mr-2 px-4" onClick={handleGptSearchClick}>
            GPT Search
          </button>
          <img src={DEFAULT_AVATAR} alt="user" className="w-8 h-8" />
          <button
            className="bg-red-700 h-8 text-white px-2 mx-2"
            onClick={handleSignout}
          >
            signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

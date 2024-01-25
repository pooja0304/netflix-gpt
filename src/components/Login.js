import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInform, setIsSigninform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispath = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSigninform(!isSignInform);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // signin || signup login
    if (!isSignInform) {
      // signup login

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispath(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      // signin logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg"
          className="absolute "
        />
      </div>
      <div>
        <form className="absolute bg-black p-10 w-4/12 left-0 right-0 m-auto top-32 text-white bg-opacity-80">
          <h1 className="font-bold text-4xl ">
            {isSignInform ? "Sign In" : "Sign up"}
          </h1>
          {!isSignInform && (
            <input
              type="text"
              name="displayName"
              className="p-3 mt-4 w-full bg-gray-800"
              placeholder="full name"
              ref={name}
            />
          )}
          <input
            type="text"
            name="email"
            className="p-3 mt-4 w-full bg-gray-800"
            placeholder="signin"
            ref={email}
          />
          <input
            type="password"
            name="password"
            className="p-3 mt-2 w-full bg-gray-800"
            placeholder="password"
            ref={password}
          />
          <p className="text-red-500 mt-2 font-bold">{errorMessage}</p>
          <button
            type="submit"
            className="mt-5 p-3 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInform ? "Sign In" : "Sign up"}
          </button>
          <p className="mt-10 cursor-pointer" onClick={toggleSigninForm}>
            {isSignInform
              ? "New to netflix? Signup Now"
              : "Already registered? Signin now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

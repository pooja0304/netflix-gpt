// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkDdjezXHa9Fo7oe5XXzTw8yFAQeu8nQo",
  authDomain: "netflix-gpt-44b75.firebaseapp.com",
  projectId: "netflix-gpt-44b75",
  storageBucket: "netflix-gpt-44b75.appspot.com",
  messagingSenderId: "467071328684",
  appId: "1:467071328684:web:3b0beb0a61010189ec5a09",
  measurementId: "G-J3EN24ETT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
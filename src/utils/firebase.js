// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCoRq2bCR1EqsJGBCDly9WUYjqbm0bUjk",
  authDomain: "netflix-gpt-ba010.firebaseapp.com",
  projectId: "netflix-gpt-ba010",
  storageBucket: "netflix-gpt-ba010.appspot.com",
  messagingSenderId: "110291680249",
  appId: "1:110291680249:web:64143aae37ceabbfb2db28",
  measurementId: "G-NQJJ6ES77R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

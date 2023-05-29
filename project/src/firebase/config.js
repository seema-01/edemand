// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDfmVQIjvlQMjHr7nZEYZCalQ4uvE9O9jk",

  authDomain: "phone-c8146.firebaseapp.com",

  projectId: "phone-c8146",

  storageBucket: "phone-c8146.appspot.com",

  messagingSenderId: "736445630081",

  appId: "1:736445630081:web:00496700530a9dd7e7af80",

  measurementId: "G-XRH111FG16"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
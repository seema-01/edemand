// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAEC47CMGvInC32wQ-RG_pgZT9wpOZLJNA",
  authDomain: "verification-c64ec.firebaseapp.com",
  projectId: "verification-c64ec",
  storageBucket: "verification-c64ec.appspot.com",
  messagingSenderId: "73777088904",
  appId: "1:73777088904:web:dcb7543f3d97391213123d",
  measurementId: "G-6H94189JJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
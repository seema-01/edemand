import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAEC47CMGvInC32wQ-RG_pgZT9wpOZLJNA",
  authDomain: "localhost",
  projectId: "verification-c64ec",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "73777088904",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

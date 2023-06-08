// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp-6UwbZVzeCsXcJAKvEvynUNOFVA0Td8",
  authDomain: "hw-8-library.firebaseapp.com",
  projectId: "hw-8-library",
  storageBucket: "hw-8-library.appspot.com",
  messagingSenderId: "1074558921863",
  appId: "1:1074558921863:web:f65131068ee06ee5ed5c22",
  measurementId: "G-M8EP1SY9BV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

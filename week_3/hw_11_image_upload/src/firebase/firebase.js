import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAp-6UwbZVzeCsXcJAKvEvynUNOFVA0Td8",
  authDomain: "hw-8-library.firebaseapp.com",
  projectId: "hw-8-library",
  storageBucket: "hw-8-library.appspot.com",
  messagingSenderId: "1074558921863",
  appId: "1:1074558921863:web:f65131068ee06ee5ed5c22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

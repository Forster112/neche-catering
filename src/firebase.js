import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDowjTPbL6hdkTVJKzOaKyUJEz_-NIog1s",
  authDomain: "neche-catering.firebaseapp.com",
  projectId: "neche-catering",
  storageBucket: "neche-catering.appspot.com",
  messagingSenderId: "624492514716",
  appId: "1:624492514716:web:786b9716db337008400c59",
  measurementId: "G-5WBW7PLR7N",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUiCQm9oAHTQWfENhGHeKCol2gFcgucOc",
  authDomain: "noticiaseducem.firebaseapp.com",
  projectId: "noticiaseducem",
  storageBucket: "noticiaseducem.appspot.com",
  messagingSenderId: "598895378481",
  appId: "1:598895378481:web:3ab3f39cb97bd01a2c1510",
  measurementId: "G-9HQ3HTGRZY",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseStorage = getStorage(FirebaseApp);
export const Storage = getStorage();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBXRwFhUf2cI17gCbfQwO7og8bEMIuV-_k",
  authDomain: "cloudregistration-c05fa.firebaseapp.com",
  projectId: "cloudregistration-c05fa",
  storageBucket: "cloudregistration-c05fa.appspot.com",
  messagingSenderId: "107161688280",
  appId: "1:107161688280:web:2cb9721b5ab61b53ff5fad",
  measurementId: "G-9RSK2D28X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db , storage}
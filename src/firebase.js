// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp= initializeApp{
  apiKey: "AIzaSyC1uB47nxIYzZcYwNLIQVXomcmFIRBs4XE",
  authDomain: "project1-a2790.firebaseapp.com",
  projectId: "project1-a2790",
  storageBucket: "project1-a2790.appspot.com",
  messagingSenderId: "861792216981",
  appId: "1:861792216981:web:c59a752247d6e7281e389c",
  measurementId: "G-31YGHVT3HJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
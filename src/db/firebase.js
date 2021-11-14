// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt5kptyQXQN0h2MD-8H2Lo038EraoIOtU",
  authDomain: "cookies-and-cream-9d548.firebaseapp.com",
  projectId: "cookies-and-cream-9d548",
  storageBucket: "cookies-and-cream-9d548.appspot.com",
  messagingSenderId: "184227603525",
  appId: "1:184227603525:web:a83c8ede66828006c22f2c",
  measurementId: "G-PEHGXDJXZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore(); 
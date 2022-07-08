// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCbVH1-ENZmQVMT1oMerHYeSDFKhnB0-YQ",

  authDomain: "todo-app-28e70.firebaseapp.com",

  projectId: "todo-app-28e70",

  storageBucket: "todo-app-28e70.appspot.com",

  messagingSenderId: "144767856971",

  appId: "1:144767856971:web:4ba91d127d594d35d678ce",

  measurementId: "G-329M2Y9H8E",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

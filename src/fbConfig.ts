import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBVUjKZGYb30SYYASHwnZIxlVu0X9yfQA8",
  authDomain: "psy-test-f5086.firebaseapp.com",
  databaseURL: "https://psy-test-f5086.firebaseio.com",
  projectId: "psy-test-f5086",
  storageBucket: "psy-test-f5086.appspot.com",
  messagingSenderId: "406917090759",
  appId: "1:406917090759:web:514497dcd2fe208c279de2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();
import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCBxn7tcZgwyMDIMhjBztJ_poU0RpUMMqo",
    authDomain: "tohacks-may-2021.firebaseapp.com",
    projectId: "tohacks-may-2021",
    storageBucket: "tohacks-may-2021.appspot.com",
    messagingSenderId: "476407277366",
    appId: "1:476407277366:web:0a12afd8ccbd1686f5b597"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
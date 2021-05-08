import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBxn7tcZgwyMDIMhjBztJ_poU0RpUMMqo",
    authDomain: "tohacks-may-2021.firebaseapp.com",
    projectId: "tohacks-may-2021",
    storageBucket: "tohacks-may-2021.appspot.com",
    messagingSenderId: "476407277366",
    appId: "1:476407277366:web:0a12afd8ccbd1686f5b597"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth };
export default db;
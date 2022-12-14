import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1v0RaQ8JkG3PbwsNEQ2tvUMBpVu0YeoY",
    authDomain: "netflix-clone-ec4c6.firebaseapp.com",
    projectId: "netflix-clone-ec4c6",
    storageBucket: "netflix-clone-ec4c6.appspot.com",
    messagingSenderId: "465861608437",
    appId: "1:465861608437:web:49e319a5779ee8f7b096bc"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKNiT1r2mnygyPGOBPphKYDS0RsSArbok",
  authDomain: "clone-d6958.firebaseapp.com",
  projectId: "clone-d6958",
  storageBucket: "clone-d6958.appspot.com",
  messagingSenderId: "364935981120",
  appId: "1:364935981120:web:7960a835a4e511892457a5",
  measurementId: "G-G9W4FL25WG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

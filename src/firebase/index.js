// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGjOETRQB0xVYdmpXP2qfapu8pRGfw2Ko",
  authDomain: "fir-notes-be7b5.firebaseapp.com",
  projectId: "fir-notes-be7b5",
  storageBucket: "fir-notes-be7b5.appspot.com",
  messagingSenderId: "514764300622",
  appId: "1:514764300622:web:58613307205e7594e9fe1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6taP9hm8oAMcrAUzvov2ithSHsKzrfdY",
  authDomain: "fir-1st-conceptual.firebaseapp.com",
  projectId: "fir-1st-conceptual",
  storageBucket: "fir-1st-conceptual.firebasestorage.app",
  messagingSenderId: "923599450349",
  appId: "1:923599450349:web:f51d1e9f73eddbb04a1ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDswgOikUnUvHtbj4hwDKFdTtraRzIvIA0",
    authDomain: "lexica-118d9.firebaseapp.com",
    projectId: "lexica-118d9",
    storageBucket: "lexica-118d9.appspot.com",
    messagingSenderId: "970005665142",
    appId: "1:970005665142:web:f28f3613693d18a98ed657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
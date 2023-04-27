// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1VZmpYxGcP1ZyKu6UTg4noaRAPOMKMOg",
    authDomain: "auth-firebase-context-ta-cde8c.firebaseapp.com",
    projectId: "auth-firebase-context-ta-cde8c",
    storageBucket: "auth-firebase-context-ta-cde8c.appspot.com",
    messagingSenderId: "718560378936",
    appId: "1:718560378936:web:71347ea5ae678dc2a1a6cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
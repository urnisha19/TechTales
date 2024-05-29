// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0gsCKI9xyklFWpXPrL3fVUjQdpt-Rkh8",
    authDomain: "techtales-df535.firebaseapp.com",
    projectId: "techtales-df535",
    storageBucket: "techtales-df535.appspot.com",
    messagingSenderId: "46189406879",
    appId: "1:46189406879:web:ee03bf1353c8e2991e50aa"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
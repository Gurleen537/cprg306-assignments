// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZjcSRNmP3EAna71feRKiES5KK6XC_7AE",
  authDomain: "cprg-assignments306-5d8ad.firebaseapp.com",
  projectId: "cprg-assignments306-5d8ad",
  storageBucket: "cprg-assignments306-5d8ad.appspot.com",
  messagingSenderId: "575199665707",
  appId: "1:575199665707:web:5f84bd8132ce25a375546e",
  measurementId: "G-0R535H9XS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

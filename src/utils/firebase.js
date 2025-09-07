// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANZmY91bJpyQw2eHqlzOU6y3qgXXwUcec",
  authDomain: "netflixgpt-ba8f7.firebaseapp.com",
  projectId: "netflixgpt-ba8f7",
  storageBucket: "netflixgpt-ba8f7.firebasestorage.app",
  messagingSenderId: "1053181918697",
  appId: "1:1053181918697:web:27bbcae105e3bf3b2e5f78",
  measurementId: "G-ZW44ZHCECX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export authentication
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUEiR1eeO356jn_fO9SoRrFdGB99xMzYQ",
  authDomain: "social-media-feed-feb67.firebaseapp.com",
  projectId: "social-media-feed-feb67",
  storageBucket: "social-media-feed-feb67.firebasestorage.app",
  messagingSenderId: "206688444162",
  appId: "1:206688444162:web:9d12ace252863fadccac1b",
  measurementId: "G-6B8LQTR60V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };

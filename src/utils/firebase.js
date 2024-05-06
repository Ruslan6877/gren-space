// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpE52w4ROn25HyB3XodErHiAxJ92zLy5A",
  authDomain: "green-shop-64a2e.firebaseapp.com",
  projectId: "green-shop-64a2e",
  storageBucket: "green-shop-64a2e.appspot.com",
  messagingSenderId: "252065906321",
  appId: "1:252065906321:web:5291e5437903d95e614930",
  measurementId: "G-P3ZRWDME2W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app);

// const analytics = getAnalytics(app);
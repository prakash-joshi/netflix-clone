// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGn04GaAkSWcYOKpZsbojBlaf-HOy5500",
  authDomain: "netflix-clone-d1ebe.firebaseapp.com",
  projectId: "netflix-clone-d1ebe",
  storageBucket: "netflix-clone-d1ebe.appspot.com",
  messagingSenderId: "403436229078",
  appId: "1:403436229078:web:98c748a31f62c87d9a9477",
  measurementId: "G-KYJK46YMY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

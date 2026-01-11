// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhrzkdjof37sosctli5kTCAVTcmGaJNjI",
  authDomain: "orman-60f33.firebaseapp.com",
  projectId: "orman-60f33",
  storageBucket: "orman-60f33.firebasestorage.app",
  messagingSenderId: "12625147512",
  appId: "1:12625147512:web:786ed0c0a9348342841f8d",
  measurementId: "G-S4W0DWPC8M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// Google login oynasi har safar hisobni tanlashni so'rashi uchun (ixtiyoriy)
googleProvider.setCustomParameters({
  prompt: "select_account",
});

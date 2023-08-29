// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2AbD7pvx-XA5ZXVY03gKl98QuLCCpwoA",
  authDomain: "vidiverse-c0948.firebaseapp.com",
  projectId: "vidiverse-c0948",
  storageBucket: "vidiverse-c0948.appspot.com",
  messagingSenderId: "712133873913",
  appId: "1:712133873913:web:26cd8a9fff48e89bd51228",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;

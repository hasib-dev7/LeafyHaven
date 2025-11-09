// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClI2xwH_w5EgAjCZwNXVxm8n1T9lBw_NU",
  authDomain: "leafyhaven.firebaseapp.com",
  projectId: "leafyhaven",
  storageBucket: "leafyhaven.firebasestorage.app",
  messagingSenderId: "309478597571",
  appId: "1:309478597571:web:4c6662e06e4e95d250d376",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

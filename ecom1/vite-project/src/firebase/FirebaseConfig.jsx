// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "",
  authDomain: "ecom1-bee68.firebaseapp.com",
  projectId: "ecom1-bee68",
  storageBucket: "ecom1-bee68.appspot.com",
  messagingSenderId: "361134864513",
  appId: "1:361134864513:web:f7115593ee571db4def580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
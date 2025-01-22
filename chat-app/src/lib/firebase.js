
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: " AIzaSyAHbrKwYuz5TALZfg_P_O_8rBqjbTKwx_E",
  authDomain: "reactchatapp-8bf92.firebaseapp.com",
  projectId: "reactchatapp-8bf92",
  storageBucket: "reactchatapp-8bf92.firebasestorage.app",
  messagingSenderId: "855228584490",
  appId: "1:855228584490:web:11dc66d725eb72dfac2953"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()

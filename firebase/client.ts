// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBLmeokZUCKv5HjH8EKzpckS-QnsyOxlA",
  authDomain: "prepwise-c2440.firebaseapp.com",
  projectId: "prepwise-c2440",
  storageBucket: "prepwise-c2440.firebasestorage.app",
  messagingSenderId: "345638385106",
  appId: "1:345638385106:web:24fa93ef09fc034c5a040b",
  measurementId: "G-Z6CDT56ENN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app); 
export const db = getFirestore(app); 
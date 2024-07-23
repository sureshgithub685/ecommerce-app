// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBF-fzsgHH-WoRmHj-fF4f6vUeRJPpUniM",
  authDomain: "ecommerce-app-5049a.firebaseapp.com",
  projectId: "ecommerce-app-5049a",
  storageBucket: "ecommerce-app-5049a.appspot.com",
  messagingSenderId: "424237809213",
  appId: "1:424237809213:web:aaa5358330ee9c5958b454",
  measurementId: "G-3PSMM2GKYE"
};

const app = firebase.initializeApp(firebaseConfig);
export const myDatabase = firebase.firestore();
export const auth = getAuth(app)
export const provider =new GoogleAuthProvider()
export default app

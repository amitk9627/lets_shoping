import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB6C_Zs7uVEUe5nuxRZ1uJZzvoBRQuRYhk",
  authDomain: "shoppingcart-6a064.firebaseapp.com",
  projectId: "shoppingcart-6a064",
  storageBucket: "shoppingcart-6a064.appspot.com",
  messagingSenderId: "562019176723",
  appId: "1:562019176723:web:0c0cb34a0c9d6f19d88ae6",
  measurementId: "G-69MJDJQWLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;
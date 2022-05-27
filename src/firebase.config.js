
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyAJ2fX0lemEaHXtnHDHsD7IM1jK_Eah1HI",
  authDomain: "house-marketplace-app-ab029.firebaseapp.com",
  projectId: "house-marketplace-app-ab029",
  storageBucket: "house-marketplace-app-ab029.appspot.com",
  messagingSenderId: "310003453095",
  appId: "1:310003453095:web:fb089c8b869a42d1975f82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
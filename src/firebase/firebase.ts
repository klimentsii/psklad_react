
import { initializeApp } from "firebase/app";
import { getFirestore,  Firestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAlD6zwxBHGaiDpR8OP2sHWgqm530RduWk",
  authDomain: "psklad-cf3f7.firebaseapp.com",
  projectId: "psklad-cf3f7",
  storageBucket: "psklad-cf3f7.appspot.com",
  messagingSenderId: "434229134922",
  appId: "1:434229134922:web:003cf6025b3a613e9088b3",
  measurementId: "G-XVLBM0YM32"
};

const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);

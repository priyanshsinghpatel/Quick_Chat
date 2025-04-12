import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "quickchat-2a3b3.firebaseapp.com",
  projectId: "quickchat-2a3b3",
  storageBucket: "quickchat-2a3b3.firebasestorage.app",
  messagingSenderId: "106134487933",
  appId: "1:106134487933:web:58c4e0939f8e2114038214"
};
console.log(firebaseConfig.apiKey)

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

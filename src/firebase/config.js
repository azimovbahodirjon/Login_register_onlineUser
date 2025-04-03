import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf6CsSpZbC7EKx0Pz43lkjn4jpo5AoxP4",
  authDomain: "todo-list-ef16e.firebaseapp.com",
  projectId: "todo-list-ef16e",
  storageBucket: "todo-list-ef16e.firebasestorage.app",
  messagingSenderId: "1013725617661",
  appId: "1:1013725617661:web:8773bb54fb30589bc44d94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

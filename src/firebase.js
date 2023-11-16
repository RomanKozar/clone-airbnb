// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "test",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "test",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "test",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "test",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "test",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "test",
};

const app = initializeApp(firebaseConfig);

export default app;

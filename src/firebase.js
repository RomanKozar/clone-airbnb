import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "test",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "test",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "test",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "test",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "test",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "test",
};

export const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

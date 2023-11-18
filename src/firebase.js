import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbGAaoTL7wdz9PIaNfEFar5oBC68tzB4w",
  authDomain: "clone-airbnb-d6b13.firebaseapp.com",
  databaseURL: "https://clone-airbnb-d6b13-default-rtdb.firebaseio.com/",
  projectId: "clone-airbnb-d6b13",
  storageBucket: "clone-airbnb-d6b13.appspot.com",
  messagingSenderId: "328609979581",
  appId: "1:328609979581:web:d3c121d9fb7b32faf26bd4",
};

const app = initializeApp(firebaseConfig);

export default app;

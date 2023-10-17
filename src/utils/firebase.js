import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDr8Y7KgQQKqNsdLLmiTAubem1AaUZR7DY",
  authDomain: "facbook-34ad2.firebaseapp.com",
  projectId: "facbook-34ad2",
  storageBucket: "facbook-34ad2.appspot.com",
  messagingSenderId: "289751934277",
  appId: "1:289751934277:web:c8af8d55d0b61aeae5ca2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
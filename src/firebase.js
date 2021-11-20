import { initializeApp } from "firebase/app";
console.log(process.env);

const firebaseConfig = {
  // apiKey: "AIzaSyChOTOxGpD8jvjVCdDXFfkT4ARCFnFckT8",
  // authDomain: "auth-exam-e23d6.firebaseapp.com",
  // projectId: "auth-exam-e23d6",
  // storageBucket: "auth-exam-e23d6.appspot.com",
  // messagingSenderId: "61852942183",
  // appId: "1:61852942183:web:629d63689eb6938e4679c2",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

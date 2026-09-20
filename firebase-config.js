import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Firebase web configuration is intentionally public client configuration.
// Access to booking data is enforced by Firestore Security Rules and Firebase Auth.
const firebaseConfig = {
  apiKey: "AIzaSyAdbCxryvRBGYp9m8lCFNr80lGIaIoBrq8",
  authDomain: "rigan-9d5cc.firebaseapp.com",
  projectId: "rigan-9d5cc",
  storageBucket: "rigan-9d5cc.firebasestorage.app",
  messagingSenderId: "613097879427",
  appId: "1:613097879427:web:741abef992c1beb4eca8b6",
  measurementId: "G-VGB6N5R8ZV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, firebaseConfig };

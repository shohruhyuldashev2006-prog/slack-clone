// firebase.js (v9 modular, toza variant)
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// config
const firebaseConfig = {
  apiKey: "AIzaSyAYIzezVO_0w0Dl9iCTW4Jkdf5KBxDKh7A",
  authDomain: "clone-slack-yt-a942b.firebaseapp.com",
  projectId: "clone-slack-yt-a942b",
  storageBucket: "clone-slack-yt-a942b.appspot.com",
  messagingSenderId: "55839659037",
  appId: "1:55839659037:web:b369aedcf4579a56dce2f4",
  measurementId: "G-GYKC1T0R0K"
};

// init
const app = initializeApp(firebaseConfig);

// services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// timestamp export
const firebaseTime = serverTimestamp();

export { db, auth, provider, firebaseTime };

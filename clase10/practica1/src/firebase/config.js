import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDhIZWFl3NWjsMp2BZnGx2Z3nrO1QTDEjA",
  authDomain: "clase11-2025.firebaseapp.com",
  projectId: "clase11-2025",
  storageBucket: "clase11-2025.firebasestorage.app",
  messagingSenderId: "748323219155",
  appId: "1:748323219155:web:45c025ab036cbd12dd1626"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = app.firestore()
export const storage = app.storage()

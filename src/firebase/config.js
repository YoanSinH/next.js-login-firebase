import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AcmeApp-5Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z",
  authDomain: "AcmeApp-0.firebaseapp.com",
  projectId: "AcmeApp-0",
  storageBucket: "AcmeApp-0..appspot.com",
  messagingSenderId: "0000000000",
  appId: "1:0000000000:web:0000000000000000000000"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
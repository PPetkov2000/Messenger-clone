import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADZY6u_27AMgHv94EpFt_yuqF7g_EKUOA",
  authDomain: "teammanager-a529e.firebaseapp.com",
  databaseURL: "https://teammanager-a529e.firebaseio.com",
  projectId: "teammanager-a529e",
  storageBucket: "teammanager-a529e.appspot.com",
  messagingSenderId: "518332842812",
  appId: "1:518332842812:web:967f0d1963158519065439",
  measurementId: "G-3XG4NMWK2K",
});

const db = firebaseApp.firestore();

export default db;

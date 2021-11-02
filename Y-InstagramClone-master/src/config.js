import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCAPQ_aUjWs9r0A48tAOngiJWwoUTILn3g",
  authDomain: "instagram-ghub.firebaseapp.com",
  projectId: "instagram-ghub",
  storageBucket: "instagram-ghub.appspot.com",
  messagingSenderId: "447113115455",
  appId: "1:447113115455:web:8d0864ab48c5051250c58a",
  measurementId: "G-VJK3T7TT74"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPW4KfEZ6I9RVrC_cT7pvObHZr3px_I-8",
  authDomain: "dummy-linkedin-clone-fa74e.firebaseapp.com",
  projectId: "dummy-linkedin-clone-fa74e",
  storageBucket: "dummy-linkedin-clone-fa74e.appspot.com",
  messagingSenderId: "9047111303",
  appId: "1:9047111303:web:3e7a6c3f0ccad43cb86a22",
  measurementId: "G-QT3RG4VHBH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

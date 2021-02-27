import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3vescPJvECrMC-rbxsCL_7frNtt4CXYY",
    authDomain: "slack-clone-24cd3.firebaseapp.com",
    projectId: "slack-clone-24cd3",
    storageBucket: "slack-clone-24cd3.appspot.com",
    messagingSenderId: "870633472996",
    appId: "1:870633472996:web:29ec04cca8b29bc4aefdf1"
  };


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
console.log(firebase);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// console.log("database", db);
// console.log("auth", auth);
// console.log("provider", provider);

export  {auth, provider, db};
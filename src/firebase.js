import firebase from 'firebase';

const firebaseConfig = {
  
};


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9clYnh0lpTLKXK7oVbQbxpBqBSypqc6Q",
  authDomain: "todoapp-599c1.firebaseapp.com",
  projectId: "todoapp-599c1",
  storageBucket: "todoapp-599c1.appspot.com",
  messagingSenderId: "215929420581",
  appId: "1:215929420581:web:a11d847e33d5e734f878cc"
});

const db = firebaseApp.firestore();

export default db;
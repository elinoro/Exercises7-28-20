import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAWTw0ZUWzRA9yy23M8qjwpiM2cUAI_taI",
  authDomain: "produp-7c363.firebaseapp.com",
  databaseURL: "https://produp-7c363.firebaseio.com",
  projectId: "produp-7c363",
  storageBucket: "produp-7c363.appspot.com",
  messagingSenderId: "514313702405",
  appId: "1:514313702405:web:6269bd01a8dbecbf22a06c"
});

export { firebaseConfig as firebase };
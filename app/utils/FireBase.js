import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhN57YzpcgcxVTVNolgjfeE47H9rgIb9g",
  authDomain: "lucky-39cca.firebaseapp.com",
  databaseURL: "https://lucky-39cca.firebaseio.com",
  projectId: "lucky-39cca",
  storageBucket: "lucky-39cca.appspot.com",
  messagingSenderId: "548770807476",
  appId: "1:548770807476:web:ede376309ab0f3d048a1e1"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

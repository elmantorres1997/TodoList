import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBU4UbEHdE3Dtw2hRtIkWbau08VuRltqfM",
  authDomain: "todoapp-17586.firebaseapp.com",
  databaseURL: "https://todoapp-17586.firebaseio.com",
  projectId: "todoapp-17586",
  storageBucket: "todoapp-17586.appspot.com",
  messagingSenderId: "263956554931",
  appId: "1:263956554931:web:60abe0d5f132f48ea5bcc6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };
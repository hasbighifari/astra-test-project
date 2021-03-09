import firebase from "firebase/app"
import 'firebase/analytics'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBm44tcbbMQ0g23jMJd5MOb0fTp6C3in0w",
    authDomain: "astra-test-crud.firebaseapp.com",
    databaseURL: "https://astra-test-crud-default-rtdb.firebaseio.com",
    projectId: "astra-test-crud",
    storageBucket: "astra-test-crud.appspot.com",
    messagingSenderId: "562960557205",
    appId: "1:562960557205:web:dcb834069c1c2d6887279c",
    measurementId: "G-DY74NV8TK3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase
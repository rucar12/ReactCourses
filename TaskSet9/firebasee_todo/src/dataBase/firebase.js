import firebase from "firebase/compat";


const firebaseConfig = {
    apiKey: "AIzaSyDYbb_8nO9FyeQ_1u0SatwXAJ3XjB17mJE",
    authDomain: "todo-with-database12.firebaseapp.com",
    projectId: "todo-with-database12",
    storageBucket: "todo-with-database12.appspot.com",
    messagingSenderId: "475025406407",
    appId: "1:475025406407:web:7b5803973f64e3838d01e2",
    measurementId: "G-CJ8N2Y1CPM"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
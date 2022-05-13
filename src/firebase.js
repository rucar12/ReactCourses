import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABpbdnBLpRE03SYPXiiHe7sQzMmsV7w44",
  authDomain: "todo-pieceofkhm.firebaseapp.com",
  projectId: "todo-pieceofkhm",
  storageBucket: "todo-pieceofkhm.appspot.com",
  messagingSenderId: "210568256547",
  appId: "1:210568256547:web:7ba11c9c665844816aa596",
  measurementId: "G-BGV2W4J2N2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7jA62I39g9SQEVgosMks2G_l144BsyVs",
  authDomain: "ss75-d4672.firebaseapp.com",
  projectId: "ss75-d4672",
  storageBucket: "ss75-d4672.appspot.com",
  messagingSenderId: "415744073723",
  appId: "1:415744073723:web:8872f929166090b834755e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
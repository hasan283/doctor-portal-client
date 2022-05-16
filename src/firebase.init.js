// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB1wqE4nCzqtD--orDZVpfRxkBsnpqU20",
    authDomain: "docotr-portal-2e933.firebaseapp.com",
    projectId: "docotr-portal-2e933",
    storageBucket: "docotr-portal-2e933.appspot.com",
    messagingSenderId: "424648637978",
    appId: "1:424648637978:web:345f8fc3aa96f651961ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBEBePAowNYtjRqb9MovgeC1xOow2KTYjU",
  authDomain: "mondy-india-f656a.firebaseapp.com",
  projectId: "mondy-india-f656a",
  storageBucket: "mondy-india-f656a.appspot.com",
  messagingSenderId: "1038943291994",
  appId: "1:1038943291994:web:9124bfa1843c140992a663",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

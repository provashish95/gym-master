// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOusJHWaNR83Z33sub8sM2NHIdBsc6beg",
    authDomain: "gym-master-c8470.firebaseapp.com",
    projectId: "gym-master-c8470",
    storageBucket: "gym-master-c8470.appspot.com",
    messagingSenderId: "979751388037",
    appId: "1:979751388037:web:6cfc646e205a50eb48baec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
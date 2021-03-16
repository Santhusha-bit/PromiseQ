import firebase from 'firebase/app';

// firebase configurations for the web app
const firebaesConfig = {
    apiKey: "AIzaSyAse0CPIx3X5FGYANPJjB6gdwG2cCcLo3o",
    authDomain: "promiseq-homepage.firebaseapp.com",
    projectId: "promiseq-homepage",
    storageBucket: "promiseq-homepage.appspot.com",
    messagingSenderId: "1030795287588",
    appId: "1:1030795287588:web:78c6c0c60740786d3b0cb1",
    measurementId: "G-V03MRQG6M4"
};

// Initialize Firebase

if (!firebase.apps.length){
    firebase.initializeApp(firebaesConfig)
}
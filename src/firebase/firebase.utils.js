import firebase from 'firebase/app';
import 'firebase/firestore';
import  'firebase/auth';

const config = {
    apiKey: "AIzaSyAX6epudxif-V82mzx158wy9Q7xaH3W-5w",
    authDomain: "react-1db.firebaseapp.com",
    databaseURL: "https://react-1db.firebaseio.com",
    projectId: "react-1db",
    storageBucket: "react-1db.appspot.com",
    messagingSenderId: "452999662034",
    appId: "1:452999662034:web:dc3104ad22d9f073a1200b",
    measurementId: "G-M0S27Q4EB8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
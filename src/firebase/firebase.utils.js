import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const CONFIG = {
    apiKey: "AIzaSyC3e_VJVvmdqBF5juFszRzcRVxr2b2x-Uc",
    authDomain: "crowndb-90dec.firebaseapp.com",
    databaseURL: "https://crowndb-90dec.firebaseio.com",
    projectId: "crowndb-90dec",
    storageBucket: "crowndb-90dec.appspot.com",
    messagingSenderId: "642462875255",
    appId: "1:642462875255:web:bf25332f0a10ac8e3b5072",
    measurementId: "G-FK28S3DE0C"
};

firebase.initializeApp(CONFIG);

export const AUTH = firebase.auth();
export const FIRESTORE = firebase.firestore();

const PROVIDER = new firebase.auth.GoogleAuthProvider();
PROVIDER.setCustomParameters({ prompt: 'select_account' });
export const SIGNINWITHGOOGLE = () => AUTH.signInWithPopup(PROVIDER);

export default firebase;
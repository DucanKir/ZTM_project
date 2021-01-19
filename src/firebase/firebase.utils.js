import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCx6vLeKiOYGaNmYQWrM0XwdsaCErwbQKo",
    authDomain: "crown-db-62e01.firebaseapp.com",
    projectId: "crown-db-62e01",
    storageBucket: "crown-db-62e01.appspot.com",
    messagingSenderId: "1082833981187",
    appId: "1:1082833981187:web:c7acfae4a391114bffa336"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




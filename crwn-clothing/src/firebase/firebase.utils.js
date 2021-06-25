import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB_qD48uUxO0ePVft7j0LVHgfE-WEf6Ebc",
    authDomain: "crwn-clothing-portfolio.firebaseapp.com",
    projectId: "crwn-clothing-portfolio",
    storageBucket: "crwn-clothing-portfolio.appspot.com",
    messagingSenderId: "482646586441",
    appId: "1:482646586441:web:f2cebf2c1147dca9a53b98"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:' select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

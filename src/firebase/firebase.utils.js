import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyByHLL0O8YL0GazUxmUrTYleUWCEuOCy5s',
  authDomain: 'crwn-db-d71a2.firebaseapp.com',
  databaseURL: 'https://crwn-db-d71a2.firebaseio.com',
  projectId: 'crwn-db-d71a2',
  storageBucket: '',
  messagingSenderId: '508236332374',
  appId: '1:508236332374:web:fae8b7b3ccb8ac69'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

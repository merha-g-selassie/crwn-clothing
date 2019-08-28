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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error reacting user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

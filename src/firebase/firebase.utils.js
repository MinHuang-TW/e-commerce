import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDOjNdi5jkj_UwjAw1ZO8_S-5AR8ioDppE',
  authDomain: 'nature-db.firebaseapp.com',
  databaseURL: 'https://nature-db.firebaseio.com',
  projectId: 'nature-db',
  storageBucket: 'nature-db.appspot.com',
  messagingSenderId: '509537356650',
  appId: '1:509537356650:web:4b59dfd5c2b9d48317b313',
  measurementId: 'G-1EW7217MY0',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
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
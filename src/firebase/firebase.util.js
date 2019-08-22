import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD7rnS3_Slrg1rP2najkFEBeQkAtWpH-cw",
    authDomain: "shop-web-app.firebaseapp.com",
    databaseURL: "https://shop-web-app.firebaseio.com",
    projectId: "shop-web-app",
    storageBucket: "",
    messagingSenderId: "1001984323239",
    appId: "1:1001984323239:web:bc852e467e3600a7"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
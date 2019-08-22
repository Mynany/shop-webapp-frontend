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


  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if (!userAuth) return;
    const userRef = firestore.doc('users/sfdfsd')
    const snapShop = await userRef.get()

    console.log(snapShop)
    if(!snapShop.exists){
      const { displayName, email } = userAuth;
      const createAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user' + error.message);
      }

    }
    return userRef;
  }
  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
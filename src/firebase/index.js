import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuehaOKFHvHfNbcfwSy2SNnO_iURlxl6k",
    authDomain: "dnd-story-assistant.firebaseapp.com",
    databaseURL: "https://dnd-story-assistant.firebaseio.com",
    projectId: "dnd-story-assistant",
    storageBucket: "dnd-story-assistant.appspot.com",
    messagingSenderId: "783675104937",
    appId: "1:783675104937:web:d762c685d9708b3b21d3b8",
    measurementId: "G-BE6J3N57ET"
};
const provider = new firebase.auth.GoogleAuthProvider();
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };
firebase.initializeApp(firebaseConfig);
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const generateUserDocument = async (user, additionalData) => {
    if (!user) return {};
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          uid: user.uid,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  export const createUserWithEmailAndPasswordHandler = async (event, values={email: '', password: '', displayName: ''}) => {
    const { email, password, displayName } = values
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName, email});
    }
    catch(error){
      console.error('Error Signing up with email and password');
    }
  };
  export const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      console.error("Error signing in with password and email", error);
    });
  };

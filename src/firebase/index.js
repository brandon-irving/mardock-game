import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { launchToaster } from "../core/toaster";

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
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export async function getCollection(collectionPath){
  let data = null
  const apiCall = collectionPath.length < 2 ? firestore.collection(collectionPath[0]) : firestore.collection(collectionPath[0]).doc(collectionPath[1])
  const collectionRef = await apiCall
  const doc = await collectionRef.get();
  if (doc.exists) {
    data= doc.data()
  }
  return data
}

export async function findUser(query = { key: 'name', comparison: '==', equals: 'Brandon' }) {
  let user = {}
  const { key, comparison, equals } = query
  const snapshot = await firestore.collection(`users`).where(key, comparison, equals).get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }
  snapshot.forEach(doc => {
    user = doc.data()
  });
  return user
}

export const signInWithGoogle = async () => {
 const { additionalUserInfo: {profile: {email}}} = await auth.signInWithPopup(provider)
 const user = await findUser({key: 'email', comparison: '==', equals: email})
 return user
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return {};
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      const userForCloudStore = { displayName, email, photoURL, uid: user.uid, ...additionalData }
      await userRef.set(userForCloudStore);
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const createUserWithEmailAndPasswordHandler = async (event, values = { email: '', password: '', displayName: '' }) => {
  let newUser = null
  const { email, password, displayName } = values
  event.preventDefault();
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    newUser = await generateUserDocument(user, { displayName, email });
  }
  catch (error) {
    console.error('Error Signing up with email and password');
  }
  return newUser
};

export const signInWithEmailAndPasswordHandler = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password).catch(error => {
    console.error("Error signing in with password and email", error);
  });
  const user = await findUser({key: 'email', comparison: '==', equals: email})

  return user
};
export const signOut = async () => {
  await auth.signOut()
};

export const observer = (updateContextState) => {
  // Listens for user
  firestore.collection('users').onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
      const user = change.doc.data()
      if (change.type === 'added') {

      }
      if (change.type === 'modified') {
        const { hint, innerThoughts } = user.character.dmMessage
        const message = hint || innerThoughts || ''
        if(hint){
          launchToaster({type: 'info', content: `✨  ${message}`})
          updateCharacter(user, {'character.dmMessage.hint': null})
        }
        if(innerThoughts){
          launchToaster({type: 'warning', content: `💭 ${message}`})
          updateCharacter(user, {'character.dmMessage.innerThoughts': null})
        }
        
        updateContextState({ user: {...user, hint: null, innerThoughts: null} })
      }
      if (change.type === 'removed') {
      }
    });
  });
}

export const dmObserver = (launchToaster) => {
  // Listens for user
  firestore.collection('DM').onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
      const data = change.doc.data()
      if (change.type === 'added') {

      }
      if (change.type === 'modified') {
        console.log('log: data', data)
      }
      if (change.type === 'removed') {
      }
    });
  });
}


export const updateCharacter = async (user, updates) => {
  const userRef = firestore.doc(`users/${user.uid}`);

   await userRef.update(updates);
}
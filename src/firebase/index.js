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


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
/******************************** Core *********************************/

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

export const createUserWithEmailAndPasswordHandler = async (values = { email: '', password: '', displayName: '' }) => {
  let newUser = null
  const { email, password, displayName } = values
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

export const observer = (updateContextState, currentUser) => {
  // Listens for user
  firestore.collection('users').onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
      const user = change.doc.data()
      if(currentUser.uid !== user.uid)return

      if (change.type === 'added') {

      }
      if (change.type === 'modified') {
        const { hint, innerThoughts } = user.character?.dmMessage || {}
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

export const dmObserver = (updateContextState) => {
  // Listens for user
  firestore.collection('DM').onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
      const data = change.doc.data()
      if (change.type === 'added') {

      }
      if (change.type === 'modified') {
        if(data.current){
          updateContextState({battle: data.current})
        }
        console.log('log: data', data)
      }
      if (change.type === 'removed') {
      }
    });
  });
}
/******************************** Generic (used to build others) *********************************/
export async function batchUpdate(path, list){
  // Get a new write batch
  const batch = await firestore.batch();

  // Set the value of 'NYC'
  const userRef = firestore.collection('users');
  await batch.set(userRef, {test: true});

  await batch.commit();
  // Update the population of 'SF'
  // const sfRef = db.collection('cities').doc('SF');
  // batch.update(sfRef, {population: 1000000});
  }
  
export async function updateDoc(path, updates, specialKey){
  const ref = firestore.doc(`${path}`);
  const snapshot = await ref.get();
  if (!snapshot.exists) {
    if(specialKey){
      return await ref.set({[specialKey]: updates});

    }else{
      return await ref.set(updates);
    } 
  }
  if(specialKey){
    return await ref.update({[specialKey]: updates});

  }else{
    return await ref.update(updates);
  }
}

const getDocument = async (path) => {
  try {
    const doc = await firestore.doc(path).get();
    return {
      ...doc.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export async function getCollection(collectionPath=['collection', 'document']){
  let data = null
  const apiCall = collectionPath.length < 2 ? firestore.collection(collectionPath[0]) : firestore.collection(collectionPath[0]).doc(collectionPath[1])
  const collectionRef = await apiCall
  const doc = await collectionRef.get();
  if (doc.exists) {
    data= doc.data()
  }
  return data
}


/******************************** Users *********************************/
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
export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await getDocument(`users/${uid}`)
    return {
      uid,
      ...userDocument
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const updateCharacter = async (user, updates) => {
   await updateDoc(`users/${user.uid}`, updates)
   const newUser = await getUserDocument(user.uid)
   return newUser
}

export const itemUse = async ({userGivingItem, target, item}) => {
  const userGivingItemPath = `character.items`
  const targetPath = `character`
  // Increase targets stat
  const { maxHp, maxMp} = target.character
  target.character.hp += item.hp
  target.character.mp += item.mp
  if(target.character.hp > maxHp){
    target.character.hp = maxHp
  }
  if(target.character.mp > maxMp){
    target.character.mp = maxMp
  }
  
  // Decrease users quantity
  userGivingItem.character.items[item.type][item.label].quantity -=1
  const batch = await firestore.batch();
  const targetRef = firestore.collection('users').doc(target.uid);
  const userGivingItemRef = firestore.collection('users').doc(userGivingItem.uid);
  batch.update(targetRef, { [targetPath]: target.character });
  batch.update(userGivingItemRef, { [userGivingItemPath]: userGivingItem.character.items });
  await batch.commit();

}

export const giveCharacterItem = async (user, updates, itemCategory) => {
  const path = `character.items.${itemCategory}`
  console.log('log: updates', {[itemCategory]:updates})
  await updateCharacter(user, {[path]: updates})
}

export const equipItem = async ({ user, items, newEquip, type, itemsGameData }) => {
  const equippedPath = `character.equipped.${type}`
  const itemsPath = `character.items`
  const oldEquipped = Object.keys(user.character.equipped[type]).length ? user.character.equipped[type] : null
  const newItems = { ...items }
  delete newItems[type][newEquip]
  if(oldEquipped){
    newItems[type][oldEquipped] = itemsGameData[oldEquipped]
  }

  // // Get a new write batch
  const batch = await firestore.batch();
  const userRef = firestore.collection('users').doc(user.uid);
  batch.update(userRef, { [itemsPath]: newItems });
  batch.update(userRef, { [equippedPath]: newEquip });
  await batch.commit();

  // const newUser = await getUserDocument(user.uid)
  console.log('log: equipItem user', { oldEquipped, newItems })
  return oldEquipped
}

/******************************** DM *********************************/

export async function getAllUsers(){
  const ref = await firestore.collection(`users`)
  const usersRef = await ref.get()
  const users = []
  usersRef.forEach(user => {
    const desiredUser = user.data()
    if(!desiredUser.DM){
      users.push({...desiredUser, label: desiredUser.displayName, value: desiredUser.displayName})

    }
  });
  return users
}

export const updateStoryChapter = async (chapter, updates, specialKey) => {
  await updateDoc(`DM/${chapter}`, updates, specialKey)
}

export const startBattle = async (battle) => {
  const userRef = firestore.collection('DM').doc('battles');
   await userRef.update({current: {...battle}});
}

export async function getStoryChapter(chapter){
  const res = await getCollection(['DM', chapter])
  return res || {notes: ''}
}

  /*
  how to update nested features
  const res = await db.collection('users').doc('Frank').update({
  age: 13,
  'favorites.color': 'Red'
});
  */
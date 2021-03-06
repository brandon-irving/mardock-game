import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { launchErrorToaster } from '../core/toaster';
import { cloneDeep, forEach, isEqual, map } from "lodash";
import { levelingSystem } from "../gameData/player/levels";
import { applyStatBoostToHpAnsMp } from "../common/hooks/useStatSheet";
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

/******************************** Generic (used to build others) *********************************/
/**
 * @function batchUpdate
 * Updates multiple users at once
 * @params (path, users, updates) updates must match path 
 * @returns undefined
 */
export async function batchUpdate(path, users, updates){

  const batch = await firestore.batch();
  forEach(users, (user, i)=>{
    const userRef =  firestore.collection('users').doc(user.uid)
    batch.update(userRef, {[path]: updates[i]});
  })
  await batch.commit();
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

  try{
    const { key, comparison, equals } = query
    const snapshot = await firestore.collection(`users`).where(key, comparison, equals).get();
    if (snapshot.empty) {
      return;
    }
    snapshot.forEach(doc => {
      user = doc.data()
    });
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
  
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

export const updateCharacter = async (user, updates, dontGetUser) => {
  let newUser = {}

  try{
    await updateDoc(`users/${user.uid}`, updates)
    newUser = dontGetUser ? {} : await getUserDocument(user.uid)
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  } 

   return newUser
}

export const damageCharacter = async (user, amount) => {
  try{
    const newAmount = user.character.hp - amount >= 0 ? user.character.hp - amount : 0
    await updateDoc(`users/${user.uid}`, {'character.hp':newAmount})
  
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
}

export const itemUse = async ({userGivingItem, target, item}) => {
  try{
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
    if(!userGivingItem.character.items[item.type][item.label].quantity){
      delete userGivingItem.character.items[item.type][item.label]
    }
    const batch = await firestore.batch();
    const targetRef = firestore.collection('users').doc(target.uid);
    const userGivingItemRef = firestore.collection('users').doc(userGivingItem.uid);
    batch.update(targetRef, { [targetPath]: target.character });
    batch.update(userGivingItemRef, { [userGivingItemPath]: userGivingItem.character.items });
    await batch.commit();
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
}

export const giveCharacterItem = async (user, updates, itemCategory) => {
  try{
    const path = `character.items.${itemCategory}`
    await updateCharacter(user, {[path]: updates})
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
}

export const activateSpell = async (user, mp) => {
  const newMp = user.character.mp - mp

  if(newMp < 0) {
    launchErrorToaster({content: 'Not enough MP'})
    return false
  }
  try{
    await updateCharacter(user, {'character.mp': newMp}, true)
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
  return true

}
export const activateAbility = async (user, ap) => {
  const newAp = user.character.ap - ap

  if(newAp < 0) {
    launchErrorToaster({content: 'Not enough AP'})
    return false
  }
  try{
    await updateCharacter(user, {'character.ap': newAp}, true)
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
  return true
}

export const equipItem = async ({ user, items, newEquip, type, itemsGameData }) => {
  let oldEquipped = null

  try{
    const equippedPath = `character.equipped.${type}`
    const itemsPath = `character.items`
    oldEquipped = Object.keys(user.character.equipped[type]).length ? user.character.equipped[type] : null
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

  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }

  return oldEquipped
}

export const handleLevelUp = (character) => {
  if(!character) return 
  let leveledCharacter = cloneDeep({...character})
  
  try{
    leveledCharacter = applyStatBoostToHpAnsMp(levelingSystem(character))      
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }

 return leveledCharacter
}

/******************************** DM *********************************/

export async function getAllUsers(){
  const users = []

  try{
    const ref = await firestore.collection(`users`)
    const usersRef = await ref.get()
    usersRef.forEach(user => {
      const desiredUser = user.data()
      if(!desiredUser.DM){
        users.push({...desiredUser, label: desiredUser.displayName, value: desiredUser.displayName})
  
      }
    });
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }

  return users
}

export const updateStoryChapter = async (chapter, updates, specialKey) => {
  try{
    await updateDoc(`DM/${chapter}`, updates, specialKey)
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
}

export const startBattle = async (battle) => {
  try{
    
    const userRef = firestore.collection('DM').doc('battles');
    await userRef.update({current: {...battle}});
 
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
}

export async function getStoryChapter(chapter){
  let res = {notes: ''}
  try{
    res = await getCollection(['DM', chapter])
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
  return res
}

export const updateMonsters = async (monsters) => {
  try{
    const dmRef = firestore.collection('DM').doc('battles');
    await dmRef.update({'current.monsters': monsters});
  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
 
}

export async function updateDMDocs(updates){
  const dmRef = firestore.collection('DM').doc('battles');
  await dmRef.update(updates);
}

export const giveUserRewards = async (users, rewards) => {
  try{
    const characterUpdates = []
    forEach(users, user=>{
      const newUser = cloneDeep(user)
      const { character } = newUser
      newUser.inView = null
      character.exp += rewards.exp
      forEach(rewards.items, item=>{
        const itemInBag = character.items[item.type][item.label]
        if(itemInBag){
          character.items[item.type][item.label].quantity += item.quantity
        }else{
          character.items[item.type][item.label] = item
        }

      })
      console.log('log: handleLevelUp(character)', handleLevelUp(character))
      
      characterUpdates.push((handleLevelUp(character)))
    })
    await batchUpdate('character', users, characterUpdates)
    const dmRef = firestore.collection('DM').doc('battles');
    await dmRef.update({'current': {success: true, rewards}});
    }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }

}

export const sendUserAMessage = async (user, dmMessage) => {
  try{
    await updateCharacter(user, {[`character.dmMessage`]: dmMessage})

  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
 
}

  /*
  how to update nested features
  const res = await db.collection('users').doc('Frank').update({
  age: 13,
  'favorites.color': 'Red'
});

  try{

  }catch(e){
    console.error('log: error', e)
    launchErrorToaster({content: 'There was an error'})
  }
  */
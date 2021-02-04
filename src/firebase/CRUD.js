import firebase from "firebase/app";
import "firebase/database";

export const database = firebase.database();

export function writeToDatabase(user){
    const userRef = database.ref('users/' + user.uid);
    userRef.set({firstName: user.displayName})
}
export function updateDatabase(user){
    const userRef = database.ref('users/' + user.uid);
    userRef.update({firstName: user.email})
}
export function removeFromDatabase(user){
    const userRef = database.ref('users/' + user.uid);
    userRef.remove()
}
export async function readTableFromDatabase(updateContextState){
    const userRef = database.ref('users/');

    userRef.on('value', (snapshot) => {
        const users = []
        snapshot.forEach(data => {
          const dataVal = data.val()
          users.push(dataVal)
        })
        updateContextState({users})

    }
    )
}



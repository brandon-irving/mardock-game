import { useContextState } from "dynamic-context-provider";
import { firestore } from "../../firebase";

export const useUpdateCharacter = () => {
    const { user } = useContextState()
    const userRef = firestore.doc(`users/${user.uid}`);
    async function updateCharacter(updates){
        await userRef.update(updates);
    }
    
    return [updateCharacter]
  }
  /*
  how to update nested features
  const res = await db.collection('users').doc('Frank').update({
  age: 13,
  'favorites.color': 'Red'
});
  */
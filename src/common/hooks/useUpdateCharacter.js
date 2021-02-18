import { useContextState } from "dynamic-context-provider";
import { updateCharacter } from "../../firebase";

export const useUpdateCharacter = () => {
    const { user, updateContextState } = useContextState()

    async function updateAndGetCharacter(updates){
        const newUser = await updateCharacter(user,updates)

        updateContextState({user: newUser})
    }
    
    return [updateAndGetCharacter]
  }

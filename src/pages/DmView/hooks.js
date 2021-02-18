import { useContextState } from "dynamic-context-provider";
import { map } from 'lodash'

export function useGlobalLoading(){
    const { isGlobalLoading, updateContextState } = useContextState()
    function updateGlobalLoading(isGlobalLoading){
        updateContextState({isGlobalLoading})
    }
    return [isGlobalLoading, updateGlobalLoading]
}

export function useGetUserOptions(){
    const { users } = useContextState()
    const userOptions = map(users, user=>{
        return {...user, label: user.character.name, value: user.character.name}
    })
    const options =  [...userOptions]
    
    return {options, users}
}
import { useContextState } from "dynamic-context-provider";
import { map } from 'lodash'

export function useGlobalLoading(){
    const { globalLoading, updateContextState } = useContextState()
    function updateGlobalLoading(globalLoading){
        updateContextState({globalLoading})
    }
    return [globalLoading, updateGlobalLoading]
}

export function useGetUserOptions(){
    const { users } = useContextState()
    const userOptions = map(users, user=>{
        return {...user, label: user.character.name, value: user.character.name}
    })
    const options =  [...userOptions]
    
    return {options, users}
}
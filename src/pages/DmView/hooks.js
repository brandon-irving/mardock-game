import { useContextState } from "dynamic-context-provider";

export function useGlobalLoading(){
    const { isGlobalLoading, updateContextState } = useContextState()
    function updateGlobalLoading(isGlobalLoading){
        updateContextState({isGlobalLoading})
    }
    return [isGlobalLoading, updateGlobalLoading]
}
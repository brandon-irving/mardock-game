import { useContextState } from "dynamic-context-provider";
import { items } from "../../gameData/items";

export function useGetItems(){
    const { user: {character: {items: { misc }}} } = useContextState()
    const userItems = Object.keys(misc).reduce((acc,name)=>{
        const newItems = [...acc]
        const item = {...items[name], ...misc[name], label: name, value: name}
        newItems.push(item)
        return newItems
    },[])
    return userItems 
}
import { useContextState } from "dynamic-context-provider";
import { items as itemsFullData, armors, accessories, weapons } from "../../gameData/items";
export const ITEM_TYPES = {
    misc: 'misc',
    accessory: 'accessory',
    weapon: 'weapon',
    armor: 'armor',
    specialItems: 'specialItems',
}
export function useGetSpecificItem(user, itemType){
    const repo = {
        misc: itemsFullData,
        weapon: weapons,
        armor: armors,
        accessory: accessories
    }
    const itemRepo = repo[itemType]
    const { character: {items} } = user // { misc, weapon, }
    const itemStorage = items[itemType] // {Potion,}

    const userItems = Object.keys(itemStorage).reduce((acc,name)=>{
        const newItems = [...acc]
        const item = {...itemRepo[name], ...itemStorage[name], label: name, value: name}
        newItems.push(item)
        return newItems
    },[])
    
    return [userItems, itemRepo, items, itemStorage ] 
}
export function useGetItems(manualUser, itemType){
    const { user } =  useContextState()
    const desiredUser = manualUser ? manualUser : user
    const [userItems, items, dbItems, itemStorage] = useGetSpecificItem(desiredUser, itemType)
    return [userItems, items, dbItems[itemType], itemStorage]
}


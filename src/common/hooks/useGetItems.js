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
    const itemsGameData = repo[itemType]
    const { character: {items} } = user // { misc, weapon, }
    const itemStorage = items[itemType] // {Potion,}

    const userItems = Object.keys(itemStorage).reduce((acc,name)=>{
        const newItems = [...acc]
        const item = {...itemsGameData[name], ...itemStorage[name], label: name, value: name}
        newItems.push(item)
        return newItems
    },[])
    
    return [userItems, itemsGameData, items, itemStorage ] 
}
export function useGetItems(manualUser, itemType){
    const { user } =  useContextState()
    const desiredUser = manualUser ? manualUser : user
    const [userItems, itemsGameData, dbItems] = useGetSpecificItem(desiredUser, itemType)
    return [userItems, itemsGameData, dbItems[itemType]]
}


import { forEach, map } from "lodash"
import { launchSuccussToaster } from "../../core/toaster"
import { batchUpdate, giveCharacterItem } from "../../firebase"
import { useGetItems } from "./useGetItems"
import { useGetUserOptions } from "../../pages/DmView/hooks"

export function useBatchUpdateItems(type){
const { options } = useGetUserOptions()
async function updateBatchItems(values){
    const { availableItem: item, quantity} = values
    const newItems = []
    const newUsers = map(options, option=>{
        const newOption = {...option}
        let currentItems = newOption.character.items[type][item.label]
        if(currentItems){
            currentItems.quantity += quantity
        }else{
            newOption.character.items[type][item.label] = {...item, quantity}
        }
        
        newItems.push(newOption.character.items)
        return newOption
    })

    await batchUpdate('character.items', newUsers, newItems)
}
return [updateBatchItems]
}
export const useUpdateItems = (user, type) => {
    const [userItemStorage, items,] = useGetItems(user, type)
    const characterDbItems = user.character.items[type]
    async function updateItems(updates = ['3_Potion']){
        const newItems = { ...characterDbItems}
        forEach(updates, update => {
            const [quantityString, itemName] = update.split('_')
            const quantity = Number(quantityString)
            const itemToAdd = { ...items[itemName], quantity }
            const itemsCharacterIsCarrying = characterDbItems[itemName]

            

            if (itemsCharacterIsCarrying) {
                let newQuantity = itemsCharacterIsCarrying.quantity
                newQuantity += itemToAdd.quantity

                if (newQuantity < 0) {
                    newQuantity = 0
                }
                
                itemsCharacterIsCarrying.quantity = newQuantity
    
            } else {
                newItems[itemName] = itemToAdd
            }
        })

        await giveCharacterItem(user, newItems, type)
        launchSuccussToaster({content: `Successfully given ${user.displayName} items`})
    }
    
    return [updateItems]
}


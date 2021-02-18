import { forEach } from "lodash"
import { launchToaster } from "../../core/toaster"
import { batchUpdate, giveCharacterItem } from "../../firebase"
import { useGetItems } from "./useGetItems"
import { initialCharacterObject } from '../../gameData/player/initialCharacterObject'
import { useGetUserOptions } from "../../pages/DmView/hooks"

export function useBatchUpdateItems(type){
const { options } = useGetUserOptions()
async function updateBatchItems(){
    console.log('log: options', {type, options})
    await batchUpdate()
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
            console.log('log: user, newItems, type', { itemToAdd, characterDbItems, itemsCharacterIsCarrying})


            if (itemsCharacterIsCarrying) {
                let newQuantity = itemsCharacterIsCarrying.quantity
                if (quantity > 0) newQuantity += itemToAdd.quantity
                if (quantity < 0) {
                    newQuantity -= itemToAdd.quantity
                }
                if (newQuantity < 0) {
                    newQuantity = 0
                }
                itemsCharacterIsCarrying.quantity = newQuantity
    
            } else {
                newItems[itemName] = itemToAdd
            }
        })
        await giveCharacterItem(user, newItems, type)
        launchToaster({type: 'success', content: `Successfully given ${user.displayName} items`})
    }
    
    return [updateItems]
}


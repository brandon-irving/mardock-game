import { forEach } from "lodash"
import { giveCharacterItem } from "../../firebase"
import { useGetMisc } from "./useGetMisc"

export const useUpdateItems = (user) => {
    const { misc, items } = useGetMisc(user)
    async function updateItems(updates = ['Potion3']){
        const newItems = { ...misc }
        forEach(updates, update => {
            const [itemName, quantityString] = update.split(' ')
            const quantity = Number(quantityString)
            const item = { ...items[itemName], quantity }
            if (misc[itemName]) {
                let newQuantity = misc[itemName].quantity
                if (quantity > 0) newQuantity += item.quantity
                if (quantity < 0) {
                    newQuantity -= item.quantity
                }
                if (newQuantity < 0) {
                    newQuantity = 0
                }
                misc[itemName].quantity = newQuantity
    
            } else {
                newItems[itemName] = item
            }
        })
        await giveCharacterItem(user, newItems, 'misc')

    }
    
    return [updateItems]
}


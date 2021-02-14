import { useContextState } from "dynamic-context-provider";
import { map } from "lodash";
import { accessories as accessoriesRepo, weapons as weaponsRepo, armors as armorRepo, items as itemsRepo } from "../../gameData/items";
const noItemOption = {label: 'No Options', value: 'No Options', }
export function useGetBagOptions(){
    const { user: {character: {items}} } = useContextState()

    const options = Object.keys(items).reduce((acc, type)=>{
        const itemsMap = {...acc}
        const itemType = items[type]
        const repoMapper = {
            misc: itemsRepo,
            weapons: weaponsRepo,
            accessories: accessoriesRepo,
            armor: armorRepo
        }
        const repo = repoMapper[type]

        itemsMap[type] = map(Object.keys(itemType), itemName=>{
            return {...itemType[itemName], ...repo[itemName]}
        })
        
        return itemsMap
    }, {})
    return options
}
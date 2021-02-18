import { useContextState } from "dynamic-context-provider";
import { map } from "lodash";
import { accessories as accessoriesRepo, weapons as weaponsRepo, armors as armorRepo, items as itemsRepo } from "../../gameData/items";
import convertToOptions from "../helpers/convertToOptions";
export function useGetBagOptions(){
    const { user: {character: {items}} } = useContextState()
    const options = Object.keys(items).reduce((acc, type)=>{
        const itemsMap = {...acc}
        const itemType = items[type]
        const repoMapper = {
            misc: itemsRepo,
            weapon: weaponsRepo,
            accessory: accessoriesRepo,
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

export function useGetAllItemOptions(user){
    const {character: {items} } = user

    const options = Object.keys(items).reduce((acc, type)=>{
        const repoMapper = {
            misc: itemsRepo,
            weapon: weaponsRepo,
            accessory: accessoriesRepo,
            armor: armorRepo,
            specialItem: {}
        }
        const repo = repoMapper[type]
        return {...acc,[type]: convertToOptions(repo)}
    }, {})
    return options
}
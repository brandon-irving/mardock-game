import { useContextState } from "dynamic-context-provider";
import { map } from "lodash";
import { accessories, weapons, armors } from "../../gameData/items";

export function useEquipped(){
    const { user: {character: {equipped}} } = useContextState()
    const completeEquipped = map(Object.keys(equipped), key=>{
        const equipment = equipped[key]
        let equippedInfo = null
        if(key === 'armor'){
        equippedInfo = {...equipment, ...armors[equipment.title]}
        }else if(key === 'weapon'){
            equippedInfo = weapons[equipment]
        }else if(key === 'accessory'){
            equippedInfo = accessories[equipment]
        }
        return  equippedInfo
    })
    return completeEquipped
}
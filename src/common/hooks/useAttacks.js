import { useContextState } from "dynamic-context-provider";
import { forEach } from "lodash";
import { weapons } from "../../gameData/items";
import { attacks } from "../../gameData/player/attacks";

export function useAttacks(){
    const { user: {character: {techniques, equipped: { weapon }}} } = useContextState()
    const equippedWeapon = weapons[weapon]

    const listOfAttacks = attacks[equippedWeapon.type]

    
    const availableAttacks = []
    forEach(techniques.attacks, name=>{
        if(!listOfAttacks[name])return 
        availableAttacks.push({...listOfAttacks[name], value: listOfAttacks[name].label}) 
    })
    return availableAttacks
}
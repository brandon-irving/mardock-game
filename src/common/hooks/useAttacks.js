import { useContextState } from "dynamic-context-provider";
import { forEach, map } from "lodash";
import { weapons } from "../../gameData/items";
import { attacks } from "../../gameData/player/attacks";

export function useAttacks(){
    const { user: {character: {techniques, equipped: { weapon }}} } = useContextState()
    const equippedWeapon = weapons[weapon]

    const listOfAttacks = attacks[equippedWeapon.type]
    console.log('log: weapon', {listOfAttacks, weapon, equippedWeapon})

    const availableAttacks = []
    forEach(techniques.attacks, name=>{
        if(!listOfAttacks[name])return 
        availableAttacks.push({...listOfAttacks[name], value: listOfAttacks[name].label}) 
    })
    return availableAttacks
}
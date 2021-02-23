import { useContextState } from "dynamic-context-provider";
import { forEach } from "lodash";
import { weapons } from "../../gameData/items";
import { attacks } from "../../gameData/player/attacks";

export function useGetAttacks(){
    const { user: {character: {techniques, equipped: { weapon }}} } = useContextState()
    const equippedWeapon = weapons[weapon]

    const listOfAttacks = attacks[equippedWeapon.attackType]
    const availableAttacks = []
    
    try{
        forEach(techniques.attacks, name=>{
            if(!listOfAttacks[name])return 
            availableAttacks.push({...listOfAttacks[name], value: listOfAttacks[name].label}) 
        })
    }catch(e){
        console.error('log: error', e)
    }

    return availableAttacks
}
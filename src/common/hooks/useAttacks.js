import { useContextState } from "dynamic-context-provider";
import { map } from "lodash";
import { weapons } from "../../gameData/items";
import { attacks } from "../../gameData/player/attacks";

export function useAttacks(){
    const { user: {character: {techniques, equipped: { weapon }}} } = useContextState()
    const equippedWeapon = weapons[weapon]
    const listOfAttacks = attacks[equippedWeapon.type]
    const availableAttacks = map(techniques.attacks, name=>{
        return {...listOfAttacks[name], value: listOfAttacks[name].label}
    })
    return availableAttacks
}
import { useContextState } from "dynamic-context-provider";
import { map } from "lodash";
import  spells from "../../gameData/player/spells";

export function useSpells(){
    const { user: {character: {techniques}} } = useContextState()
    const availableSpells = map(techniques.spells, name=>{
        return {...spells[name], value: spells[name].label}
    })
    return availableSpells
}
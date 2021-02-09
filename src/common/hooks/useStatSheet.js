import { useContextState } from "dynamic-context-provider";
import { map } from "lodash";
import { statSheet } from "../../gameData/constants";

export function useStatSheet(){
    const { user: {character: {stats}} } = useContextState()
    const completeStats = map(Object.keys(statSheet), statKey=>{
        const statCount = stats[statKey] || 0
        const statInfo = statSheet[statKey]
        let statBoost = 0
        if(statCount >= 12 && statCount<14){
            statBoost = 1
        }
        if(statCount >= 14 && statCount<16){
            statBoost = 2
        }
        if(statCount >= 16 && statCount<18){
            statBoost = 3
        }
        if(statCount >= 18 && statCount<20){
            statBoost = 4
        }
        if(statCount >= 20 ){
            statBoost = 5
        }
        return {...statInfo, ...statSheet[statKey], abbr: statKey.toUpperCase(),statCount, statBoost}
    })

    return completeStats
}
import { useContextState } from "dynamic-context-provider";

export function convertStatSheet(stats){
    const completeStats = Object.keys(stats).reduce((acc, statAbbr)=>{
        const stat = stats[statAbbr]
        const statCount = stat.points
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
        return {...acc, [statAbbr]: {...stat, statBoost}}
    },{})
    
    return completeStats
}
export function useStatSheet(manualStats){
    const { user: {character} } = useContextState()
    const stats = manualStats || character.stats
    return convertStatSheet(stats)
}
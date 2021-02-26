import { useContextState } from "dynamic-context-provider";
import { forEach } from "lodash";
import { statSheet } from '../../gameData/constants'
import { classes } from '../../gameData/player/classes'
export function convertStatSheet(stats){
    
    const completeStats = Object.keys(statSheet).reduce((acc, abbr)=>{
        const stat = stats[abbr]
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
        return {...acc, [abbr]: {...stat, abbr, statBoost}}
    },{})

    return completeStats
}
export function applyClassBoost(stats, characterClass){
    const appliedStats = {...stats}
    const classStats = classes[characterClass]
    if(classStats){
        forEach(Object.keys(classStats.statBoost), abbr=>{            
            appliedStats[abbr].points += classStats.statBoost[abbr]
        })
    }    
    return appliedStats
}
export function applyStatBoostToHpAnsMp(character, isInitial){
    const newCharacter = {...character}

    newCharacter.hp += Math.round(newCharacter.stats.vit.statBoost)
    newCharacter.maxHp += Math.round(newCharacter.stats.vit.statBoost)
    newCharacter.mp += Math.round(newCharacter.stats.int.statBoost)
    newCharacter.maxMp +=  Math.round(newCharacter.stats.int.statBoost)
    
    return newCharacter
}
export function useStatSheet(manualStats, characterClass, applyClass= false){
    const { user: {character={}} } = useContextState()
    const stats = manualStats || character.stats
    const desiredClass = characterClass || character.class
    const finalStats = convertStatSheet(stats, manualStats)
    
    return !applyClass ? finalStats : applyClassBoost(finalStats, desiredClass)
}
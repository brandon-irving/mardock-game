import { convertStatSheet } from "../../common/hooks/useStatSheet"

export const levelingSystem = (character)=>{
    if(!character)return 
    const newCharacter = {...character, stats: convertStatSheet(character.stats)}
    const { exp, level } = newCharacter
    const nextLevel = level * 4000
    if(exp >= nextLevel){
        newCharacter.level = level + 1
        newCharacter.stats = Object.keys(newCharacter.stats).reduce((acc, statKey)=>{
            const stat = newCharacter.stats[statKey]
            stat.points += Math.round(character.stats[statKey].points/10)
            return {...acc, [statKey]: {...stat}}
        },{})
    }

    
    return newCharacter
}
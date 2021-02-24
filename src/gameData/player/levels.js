import { convertStatSheet } from "../../common/hooks/useStatSheet"

export const levelingSystem = (character)=>{
    if(!character)return 
    const newCharacter = {...character, stats: convertStatSheet(character.stats)}
    const { exp, level } = newCharacter
    const nextLevel = level * 1000
    if(exp >= nextLevel){
        newCharacter.level = level + 1
        newCharacter.stats = Object.keys(newCharacter.stats).reduce((acc, statKey)=>{
            return {...acc, [statKey]: {...newCharacter.stats[statKey], points: newCharacter.stats[statKey].points + 1}}
        },{})
    }

    
    return newCharacter
}
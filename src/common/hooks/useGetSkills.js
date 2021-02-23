import { useContextState } from "dynamic-context-provider";
import { forEach } from "lodash";
import { skills as SKILLS_MAP } from "../../gameData/player/skills";

export function useGetSkills(){
    const { user: {character: {techniques: {skills}}} } = useContextState()
    const availableSkills = []
    
    try{
        forEach(skills, name=>{
            const skill = SKILLS_MAP[name]
            if(!skill)return 
            availableSkills.push({...skill, value: skill.label}) 
        })
    }catch(e){
        console.error('log: error', e)
    }

    return availableSkills
}
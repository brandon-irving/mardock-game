import { forEach } from "lodash"
import { launchErrorToaster } from "../../core/toaster"

export function checkIfSkilledEnoughToEquip(value={requirement: {}}, user){
    let skilledEnough = false
    const { character } = user
  
    if(value?.requirement?.length === 0 || !value?.requirement)return true
    try{
      forEach(Object.keys(character.stats), statName=>{
        const  {points} = character.stats[statName]
        const requirement = value.requirement[statName] 
        const noRequirements = !Object.keys(value.requirement).length
        if((requirement && points >= requirement) || noRequirements){
          skilledEnough = true
        }        
      })
    }catch(e){
      launchErrorToaster({content: 'There was an error'})
      console.error('log: error', e)
    }
   
    return skilledEnough
  }
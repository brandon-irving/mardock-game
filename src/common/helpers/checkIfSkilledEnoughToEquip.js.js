import { forEach } from "lodash"

export function checkIfSkilledEnoughToEquip(value={requirement: {}}, user){
    let skilledEnough = false
    const { character } = user
    forEach(Object.keys(character.stats), statName=>{
      const  points = character.stats[statName]
      const requirement = value.requirement[statName] 
      const noRequirements = !Object.keys(value.requirement).length
      if((requirement && points >= requirement) || noRequirements){
        skilledEnough = true
      }
    })
    return skilledEnough
  }
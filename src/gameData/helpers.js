import { flatMap, forEach, map } from "lodash";
import { statSheet } from './constants'
import items from './items/items'

export function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export function getSpecialMonsterList(containerObject) { // min and max included 
  const arrayOfSpecials = map(flatMap(containerObject), monsterConfig=>{
    return monsterConfig.special
  })
  return arrayOfSpecials
}

export function generateStats(range=5) {
  const generatedStats = Object.keys(statSheet).reduce((acc, statKey)=>{
  const newStats = {...acc}
  let randomStat = randomIntFromInterval(9, 14)
  if(range > 5 && range <= 10){
      randomStat = randomIntFromInterval(10, 15)
  }
  if(range > 10 && range <= 15){
      randomStat = randomIntFromInterval(12, 16)
  }
  if(range > 15 && range <= 20){
      randomStat = randomIntFromInterval(14, 20)
  }
  if(range > 20){
      randomStat = randomIntFromInterval(20, 25)
  }
  return {...newStats, [statKey]: randomStat}
  }, {})
  return generatedStats
  }
  export function generateItems(itemsArray){
    const listOfItems = []
    forEach(itemsArray, itemInfoString=>{
      const quantity = itemInfoString.match(/\d+/) ? Number(itemInfoString.match(/\d+/)[0]) : 1
      const itemName = itemInfoString.replace(`${quantity}`, '')
      const item = {...items[itemName], quantity}
      listOfItems.push(item)
    })

    return listOfItems
  }

  export const normalise = (value, MAX) => (value - 0) * 100 / (MAX - 0);

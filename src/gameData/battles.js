import { map } from "lodash";
import { generateItems } from "./helpers";
import { generateMonsters } from "./monsters/builders";
export function convertToBattle(users, rewards={exp: 0,gil: 0, items:[], consequence:''}){
    const monsters = map(users, user=>{
        return{...user.character, exp: 500, src: ''}
    })
    return {
        monsters,
        rewards,
    }
}
export const battles = {
    tutorialBattle1: {
        monsters: generateMonsters({ wolf: 4}).monsters,
        rewards: {
            exp: generateMonsters({ wolf: 4}).exp,
            gil: 200,
            items: generateItems(['2Potion', '2Mana Cubes']),
            consequence: 'You know a little bit more now!'
        }
    },
    tutorialBattle2: {
        monsters: generateMonsters({ wolf: 2, special: ['Grand Dire Wolf']}).monsters,
        rewards: {
            exp: generateMonsters({ wolf: 2, special: ['Grand Dire Wolf']}).exp,
            gil: 200,
            items: generateItems(['2Potion']),
            consequence: ''

        }
    },
    innBattle: {
        monsters: generateMonsters({ garvinKnight: 2, special: ['Knight Ardius', 'Royal Guard']}).monsters,
        rewards: {
            exp: generateMonsters({ garvinKnight: 2, special: ['Knight Ardius', 'Royal Guard']}).exp,
            gil: 1500,
            items: generateItems(['2Potion', '2Mana Cubes']),
            consequence: ''
        }
    },
    pirateBattle: {
        monsters: generateMonsters({ pirate: 5, special: ['Pirate Captain']}).monsters,
        rewards: {
            exp: generateMonsters({ pirate: 5, special: ['Pirate Captain']}).exp,
            gil: 1500,
            items: generateItems(['5Potion', '3Mana Cubes']),
            consequence: ''
        }
    },
  
}

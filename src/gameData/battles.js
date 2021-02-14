import { generateItems } from "./helpers";
import { generateMonsters } from "./monsters/builders";

export const battles = {
    tutorialBattle1: {
        monsters: generateMonsters({ wolf: 4}).monsters,
        rewards: {
            exp: generateMonsters({ wolf: 4}).exp,
            items: generateItems(['2Potion'])
        }
    },
    tutorialBattle2: {
        monsters: generateMonsters({ wolf: 2, special: ['Grand Dire Wolf']}).monsters,
        rewards: {
            exp: generateMonsters({ wolf: 2, special: ['Grand Dire Wolf']}).exp,
            items: generateItems(['2Potion'])
        }
    },
  
}

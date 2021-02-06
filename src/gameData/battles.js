import { generateItems } from "./helpers";
import { generateMonsters } from "./monsters/builders";

export const tutorialBattle1 = {
    monsters: generateMonsters({ wolf: 4}).monsters,
    rewards: {
        exp: generateMonsters({ wolf: 4}).exp,
        items: generateItems(['2Potion'])
    }
}

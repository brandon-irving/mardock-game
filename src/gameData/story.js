import { battles } from './battles'
const { tutorialBattle1, tutorialBattle2} = battles
const story = {
    'Chapter 1': {
        description: '',
        battles: {
            tutorialBattle1, 
            tutorialBattle2
        },

    },
    'Chapter 2': {
        description: '',
        battles: {tutorialBattle1: battles.tutorialBattle1, tutorialBattle2: battles.tutorialBattle2},

    },
    'Chapter 3': {
        description: '',
        battles: {tutorialBattle1: battles.tutorialBattle1, tutorialBattle2: battles.tutorialBattle2},

    }
}
export default story
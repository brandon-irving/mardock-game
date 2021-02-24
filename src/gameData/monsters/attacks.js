import {randomIntFromInterval} from '../helpers'
import { attacks } from '../player/attacks'
import spells from '../player/spells'
const humanEnemyAttacks = (type, attack)=>{
    const mainAttack = attacks[type][attack]
    return mainAttack
}
const humanEnemySpells = (attack)=>{
    const mainSpell = spells[attack]
    return mainSpell
}

const monsterAttacks = {
    wolf: {
        common: {
            'Slash': { label: 'Slash', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Bite': { label: 'Bite', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Growl': { label: 'Growl', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Headbutt': { label: 'Headbutt', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Grand Slash': { label: 'Grand Slash', damage: randomIntFromInterval(6, 10), description: '', element: 'normal', mp: 0},
            'Monster Howl': { label: 'Monster Howl', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Dark Bite': { label: 'Dark Bite', damage: randomIntFromInterval(6, 20), description: '', element: 'shade', mp: 0},
            'Shadow Ball': { label: 'Shadow Ball', damage: randomIntFromInterval(12, 20), description: '', element: 'shade', mp: 0},
        },
    },
    bear: {
        common: {
            'Slash': { label: 'Slash', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Bite': { label: 'Bite', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Headbutt': { label: 'Headbutt', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Swipe': { label: 'Swipe', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Force Claw': { label: 'Force Claw', damage: randomIntFromInterval(5, 9), description: '', element: 'normal', mp: 0},
            'Ferocious Fury': { label: 'Ferocious Fury', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Grand Blade': { label: 'Grand Blade', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Earth Blast': { label: 'Earth Blast', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
    },

    snake: {
        common: {
            'Bite': { label: 'Bite', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Wrap': { label: 'Wrap', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Headbutt': { label: 'Headbutt', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Venomous Bite': { label: 'Venomous Bite', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Buried Assault': { label: 'Buried Assault', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Acid Spit': { label: 'Acid Spit', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Petrify Stare': { label: 'Petrify Stare', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
    },
    
    slime: {
        common: {
            'Tackle': { label: 'Tackle', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Bounce': { label: 'Bounce', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Super Tackle': { label: 'Super Tackle', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Super Bounce': { label: 'Super Bounce', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Super Fire Ball': { label: 'Super Fire Ball', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Super Thunder Bolt': { label: 'Super Thunder Bolt', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
    },
    goblin: {
        common: {
            'Scratch': { label: 'Scratch', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Strike': { label: 'Strike', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Eye Poke': { label: 'Eye Poke', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Cry': { label: 'Cry', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Emperor Assault': { label: 'Emperor Assault', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Heal': { label: 'Heal', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Fire Ball': { label: 'Fire Ball', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
        },
    },
    garvinKnight: {
        common: {
            'Slash': { label: 'Slash', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Strike': { label: 'Strike', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Wide Slash': humanEnemyAttacks('sword', 'Wide Slash'),
            'Imperial Thrust': humanEnemyAttacks('sword', 'Imperial Thrust'),
            'Blow Away': humanEnemyAttacks('sword', 'Blow Away'),
            'Wind Cutter': humanEnemySpells('Wind Cutter'),
        },
    },
    pirate: {
        common: {
            'Strike': { label: 'Strike', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Mini Bombs': { label: 'Mini Bombs', damage: randomIntFromInterval(8,12), description: '', element: 'normal', mp: 0},
            'Sneaky Slash': { label: 'Sneaky Slash', damage: randomIntFromInterval(8, 12), description: '', element: 'normal', mp: 0},
            'Straight Shot': { label: 'Straight Shot', damage: randomIntFromInterval(8, 12), description: '', element: 'normal', mp: 0},
            'Dabloon Slice': { label: 'Dabloon Slice', damage: randomIntFromInterval(12, 16), description: '', element: 'normal', mp: 0},
        },
    },
}
export default monsterAttacks
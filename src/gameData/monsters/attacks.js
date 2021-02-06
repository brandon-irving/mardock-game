import {randomIntFromInterval} from '../helpers'

const monsterAttacks = {
    wolf: {
        common: {
            'Slash': { title: 'Slash', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Bite': { title: 'Bite', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Growl': { title: 'Growl', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Headbutt': { title: 'Headbutt', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Grand Slash': { title: 'Grand Slash', damage: randomIntFromInterval(6, 10), description: '', element: 'normal', mp: 0},
            'Monster Howl': { title: 'Monster Howl', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Dark Bite': { title: 'Dark Bite', damage: randomIntFromInterval(6, 20), description: '', element: 'shade', mp: 0},
            'Shadow Ball': { title: 'Shadow Ball', damage: randomIntFromInterval(12, 20), description: '', element: 'shade', mp: 0},
        },
    },
    bear: {
        common: {
            'Slash': { title: 'Slash', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Bite': { title: 'Bite', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Headbutt': { title: 'Headbutt', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Swipe': { title: 'Swipe', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Force Claw': { title: 'Force Claw', damage: randomIntFromInterval(5, 9), description: '', element: 'normal', mp: 0},
            'Ferocious Fury': { title: 'Ferocious Fury', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Grand Blade': { title: 'Grand Blade', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Earth Blast': { title: 'Earth Blast', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
    },

    snake: {
        common: {
            'Bite': { title: 'Bite', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Wrap': { title: 'Wrap', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Headbutt': { title: 'Headbutt', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Venomous Bite': { title: 'Venomous Bite', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Buried Assault': { title: 'Buried Assault', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Acid Spit': { title: 'Acid Spit', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Petrify Stare': { title: 'Petrify Stare', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
    },
    
    slime: {
        common: {
            'Tackle': { title: 'Tackle', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Bounce': { title: 'Bounce', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Super Tackle': { title: 'Super Tackle', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Super Bounce': { title: 'Super Bounce', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Super Fire Ball': { title: 'Super Fire Ball', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Super Thunder Bolt': { title: 'Super Thunder Bolt', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
    },
    goblin: {
        common: {
            'Scratch': { title: 'Scratch', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Strike': { title: 'Strike', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Eye Poke': { title: 'Eye Poke', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
            'Cry': { title: 'Cry', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
        },
        special: {
            'Emperor Assault': { title: 'Emperor Assault', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Heal': { title: 'Heal', damage: randomIntFromInterval(1, 4), description: '', element: 'normal', mp: 0},
            'Fire Ball': { title: 'Fire Ball', damage: randomIntFromInterval(0, 0), description: '', element: 'normal', mp: 0},
        },
    },

}
export default monsterAttacks
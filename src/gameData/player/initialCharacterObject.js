import { statSheet } from "../constants";

export const initialCharacterObject = {
    title: 'Novice Adventurer',
    ap: 10,
    class: 'Knight',
    inView: null,
    equipped: {accessory: '', armor: {}, weapon: 'Long Sword', secondaryWeapon: ''},
    exp: 0,
    gil: 0,
    hp: 30,
    mp: 30,
    items: {misc:{}, weapon: {}, armor: {}, accessory: {}, specialItem: {}},
    level: 1,
    maxAp: 30,
    maxHp: 30,
    maxMp: 30,
    stats: statSheet,
    techniques: {
        attacks: {
            sword: [],
            bow: [],
            spear: [],
            fisticuff: [],
            projectile: [],
            gun: []
        },
        spells: [],
        skills: [],
    },
    dmMessage: {
        hint: '',
        innerThoughts: ''
    }

}
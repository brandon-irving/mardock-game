import sword from '../../images/sword.svg'
import dagger from '../../images/dagger.svg'
import bow from '../../images/bow.svg'

const iconMapper = {
    'sword': sword,
    'dagger': dagger,
    'bow': bow,
}
const weapons = {
    'Long Sword': {
        price: 500, attackType: 'sword', type: 'weapon', requirement: {str: 12}, hp: 0, mp:0, roll: 'd8', label: 'Long Sword', range: '1 square', description: 'A standard 4ft long steel sword. Requires 2 hands to weild and can strike enemies near you', src: iconMapper['sword']
    },
    'Dagger': {
        price: 500, attackType: 'dagger', type: 'weapon', requirement: {dex: 12},  hp: 0, mp:0, roll: 'd4', label: 'Dagger', range: '1 square', description: 'A small and crafty blade. Requires acute handling and can strike enemies near you', src: iconMapper['dagger']
    },
    'Short Sword': {
        price: 500, attackType: 'sword', type: 'weapon', requirement: {}, hp: 0, mp:0, roll: 'd6', label: 'Short Sword', range: '1 square', description: 'A standard 2ft long sword. Any one can weild it with ease and can strike enemies near you', src: iconMapper['sword']
    },
    'Bow': {
        price: 500, attackType: 'bow', type: 'weapon', requirement: {dex: 14},  hp: 0, mp:0, roll: 'd4', label: 'Bow', range: '5 squares', description: 'A common bow and arrow. Requires some dexterity but allows you to shoot enemies within sight', src: iconMapper['bow']
    },
    'Bear Claw': {
        price: 1000, type: 'sword', requirement: {str: 14, dex: 12}, hp: 0, mp:0, roll: 'd6', label: 'Bear Claw', range: '1 square', description: '3 one ft metal claws on each hand. You can attack the enemy twice', src: iconMapper['sword']
    },
}
export default weapons
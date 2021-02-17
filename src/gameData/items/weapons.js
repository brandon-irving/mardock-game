import sword from '../../images/sword.svg'
const weapons = {
    'Long Sword': {
        type: 'weapon', requirement: {str: 12}, type: 'sword', hp: 0, mp:0, roll: 'd8', label: 'Long Sword', description: '', src: sword
    },
    'Dagger': {
        type: 'weapon', requirement: {dex: 12}, type: 'dagger', hp: 0, mp:0, roll: 'd4', label: 'Dagger', description: '', src: sword
    },
    'Short Sword': {
        type: 'weapon', requirement: {}, type: 'sword', hp: 0, mp:0, roll: 'd6', label: 'Short Sword', description: '', src: sword
    },
    'Bow': {
        type: 'weapon', requirement: {dex: 12}, type: 'bow', hp: 0, mp:0, roll: 'd4', label: 'Bow', description: '', src: sword
    },
}
export default weapons
import knight from '../../images/knight.svg'

export const classes = {
    knight: {statBoost: {str: 2}, starterWeapon: 'Long Sword', src: knight, label: 'Knight', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
    archer: {statBoost: {dex: 2}, starterWeapon: 'Bow', src: knight, label: 'Archer', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
    assassin: {statBoost: {dex: 2}, starterWeapon: 'Dagger', src: knight, label: 'Assassin', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
    diplomat: {statBoost: {per: 2}, starterWeapon: 'Short Sword', src: knight, label: 'Diplomat', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
}
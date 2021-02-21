import knight from '../../images/knight.svg'

export const classes = {
    Knight: {statBoost: {str: 2}, starterWeapon: 'Long Sword', src: knight, label: 'Knight', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
    Mage: {statBoost: {int: 2, str: -2}, starterWeapon: 'Short Sword', src: knight, label: 'Mage', description: 'Your capabilities of learning spells increases'},
    Philosopher: {statBoost: {wis: 2}, starterWeapon: 'Bow', src: knight, label: 'Philosopher', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
    Archer: {statBoost: {dex: 2}, starterWeapon: 'Bow', src: knight, label: 'Archer', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
    Assassin: {statBoost: {eva: 2}, starterWeapon: 'Dagger', src: knight, label: 'Assassin', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
    Diplomat: {statBoost: {per: 2}, starterWeapon: 'Short Sword', src: knight, label: 'Diplomat', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
}
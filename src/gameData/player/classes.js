import Mage from '../../images/Mage.svg'
import knight from '../../images/knight.svg'
import Philosopher from '../../images/Philosopher.svg'
import Archer from '../../images/Archer.svg'
import Assassin from '../../images/Assassin.svg'
import Diplomat from '../../images/Diplomat.svg'

export const classes = {
    Mage: {spells: ['Fire Ball'], statBoost: {int: 4, str: -2}, starterWeapon: 'Short Sword', src: Mage, label: 'Mage', statDescription: '++INT --STR', description: 'Your capabilities of learning spells increases'},
    Knight: {attacks: ['Wide Slash'], statBoost: {str: 2}, starterWeapon: 'Long Sword', src: knight, label: 'Knight', statDescription: '+STR', description: 'If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player'},
    Philosopher: {statBoost: {wis: 2}, starterWeapon: 'Bow', src: Philosopher, label: 'Philosopher', statDescription: '+WIS', description: 'You gain the ability: Inner Thoughts'},
    Archer: {attacks: ['Twin Shot'], statBoost: {dex: 2}, starterWeapon: 'Bow', src: Archer, label: 'Archer', statDescription: '+DEX', description: 'You get a +2 advantage in all activities that involve aim'},
    Assassin: {attacks: ['Pin Missle Strike'], statBoost: {eva: 2, spd: 2, per: -2}, starterWeapon: 'Dagger', src: Assassin, label: 'Assassin', statDescription: '+EVA +SPD -PER', description: 'You get a +2 advantage in all activities that involve stealth'},
    Diplomat: {statBoost: {per: 2}, starterWeapon: 'Short Sword', src: Diplomat, label: 'Diplomat', statDescription: '+PER', description: 'If your PER stat is higher than an enemies STR, you can attempt to end conflict with a Diplomatic roll'},
}
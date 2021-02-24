function generateSpell(label, description, element, rule, mp, stat){
    return {label, useDescription: `Mp: ${mp}`, description, element, rule, mp, stat}
}
const ballSpell = (element, mp, die)=>{
    const spell = { 
        useDescription: `Mp: ${mp}`,
        label: `${element} Ball`, 
        description: `A sphere made of ${element}, hurled at an enemy 3 meters in the users line of vision`, 
        element: element.toLowerCase(), 
        rule:`Roll a ${die} damage dice (and a d4 elemental dice if the target is weak to ${element})`, 
        mp,
    }
    return spell
}

const spells = {
    'Fire Ball':  ballSpell('Fire', 5, 'd8'),
    'Ice Ball':  ballSpell('Ice', 5, 'd8'),
    'Wind Ball':  ballSpell('Wind', 5, 'd8'),
    'Thunder Ball':  ballSpell('Thunder', 10, 'd12'),
    'Shadow Ball':  ballSpell('Shadow', 10, 'd12'),
    'Lumen Ball':  ballSpell('Lumen', 10, 'd12'),
    'Wind Cutter': { useDescription: 'Mp: 3', mp: 3, label: 'Wind Cutter', rule: 'Your attack now deals fire damage', description: 'The user blesses their blade with the sun spirit, Ilumite'},
    'Heal': generateSpell(
        'Heal',
        'Mana aimed to regenerate damaged cells to a small degree. Must be delivered through touch',
        'Heal',
        '',
        10,
        {hp: 10}
    ),
}
export default spells
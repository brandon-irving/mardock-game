const ballSpell = (element)=>{
    const spell = {name: `${element} Ball`, description: `A sphere made of ${element}, hurled at an enemy 3 meters in the users line of vision`, element: element.toLowerCase(), die: 'd8', mp: 4}
    return spell
}
const healSpell = (stat='hp+10',mp=10, description='')=>{
    const spell = {
        name: `${element} Ball`, 
        stat,
        element: element.toLowerCase(), 
        mp, 
    }
    return spell
}
const spells = {
    'Fire Ball':  ballSpell('Fire'),
    'Ice Ball':  ballSpell('Ice'),
    'Thunder Ball':  ballSpell('Thunder'),
    'Shadow Ball':  ballSpell('Shadow'),
    'Lumen Ball':  ballSpell('Lumen'),
    'Wind Ball':  ballSpell('Wind'),
    'Heal': healSpell(),
}
export default spells
import { forEach } from 'lodash'
import { randomIntFromInterval, getSpecialMonsterList, generateStats } from '../helpers'
import monsterAttacks from './attacks'
import monsters from './index'

export function buildMonster({ type = 'wolf', level = 5, attackConfig = { common: 2, special: 1} }) {
    const monster = { type, level, attacks: [], exp: level * 5.5 }
    const attackMap = monsterAttacks[type] // { common: {}, special: {}}
    const availableCommonAttacks = Object.keys(attackMap.common) // ['slash']
    const availableSpecialAttacks = Object.keys(attackMap.special) // ['fireball']

    if(attackConfig.attacks){

        forEach(attackConfig.attacks, attackName => {
            monster.attacks.push(attackMap.special[attackName])
        });
        forEach(availableCommonAttacks, (name) => {
            const attack = attackMap.common[name]
            monster.attacks.push(attack)
        });
        
    }else
   { for (let i = 0; i < attackConfig.common; i++) {
        const randomInt = randomIntFromInterval(0, (availableCommonAttacks.length - 1))
        const attack = attackMap.common[availableCommonAttacks[randomInt]]
        monster.attacks.push(attack)
        availableCommonAttacks.splice(randomInt, 1)
    }
    for (let i = 0; i < attackConfig.special; i++) {
        const randomInt = randomIntFromInterval(0, (availableSpecialAttacks.length - 1))
        const attack = attackMap.special[availableSpecialAttacks[randomInt]]
        monster.attacks.push(attack)
        availableSpecialAttacks.splice(randomInt, 1)
    }}
    return {...monster, ...generateStats(level)}
}

export function generateMonsters(monsterConfig={ wolf: 3, bear: 2, special: ['Grand Dire Wolf']}){
    const configKeys = Object.keys(monsterConfig) // [wolf, bear, special]
    const generatedMonsters = configKeys.reduce((acc, monsterType, i)=>{

        const newMonsters = i===0 ? [] : [...acc]
        const monsterData = monsters[monsterType] //  {'dire wolf': { description: '' } }
        const amountOfMonster = monsterConfig[monsterType] // 3
        const monsterList = Object.keys(monsters[monsterType] || {})// ['wolf', 'dire wolf']
        monsterList.pop() // remove special

        if(monsterType === 'special'){
            const specialMonsters = getSpecialMonsterList(monsters)
            forEach(monsterConfig.special, monsterKey=>{
                forEach(specialMonsters, monsters=>{
                    if(monsters[monsterKey]){
                        newMonsters.push({...monsters[monsterKey], ...buildMonster(monsters[monsterKey])})
                    }
                })
            })
        }else{
            for(let i = 0; i<amountOfMonster; i++){
                const randomInt = randomIntFromInterval(0, (monsterList.length - 1)) // removes the special field
                const randomMonsterKey = monsterList[randomInt]
                const randomMonster = ({...monsterData[randomMonsterKey], ...buildMonster(monsterData[randomMonsterKey]) })
                newMonsters.push(randomMonster)
            }
        }

        return newMonsters
    }, [])
    let experience = 0
    forEach(generatedMonsters, monster=>{
        experience += monster.exp
    })
    return {monsters: generatedMonsters, exp: experience}
}
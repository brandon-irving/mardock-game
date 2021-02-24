import wolf from '../../images/wolf.svg'
import kingDireWolf from '../../images/kingDireWolf.svg'

const monsters = {
    bear: {
        'Cub Soldier': { src: wolf,name: 'Cub Soldier', type: 'bear', description: '', level: 5, hp: 20, maxHp: 20, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        'Bear Scout': { src: wolf,name: 'Bear Scout', type: 'bear', description: '', level: 8, hp: 20, maxHp: 20, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        'Bear Soldier': { src: wolf,name: 'Bear Soldier', type: 'bear', description: '', level: 12, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 1} },
        special: {
            'Bear Leutinant': { src: wolf,name: 'Bear Leutinant', type: 'bear', description: '', level: 16, hp: 30, maxHp: 30, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 2} },
            'Bear Captain': { src: wolf,name: 'Bear Captain', type: 'bear', description: '', level: 20, hp: 35, maxHp: 35, mp: 20, maxMp: 20, attackConfig: { attacks: ['Force Claw', 'Power Slash', 'Grand Blade'] } },
            'Bear General': { src: wolf,name: 'Bear General', type: 'bear', description: '', level: 25, hp: 45, maxHp: 45, mp: 20, maxMp: 20, attackConfig: { attacks: ['Force Claw', 'Ferocious Fury', 'Grand Blade', 'Earth Blast'] } },
           
        }
    },
    garvinKnight: {
        'Basic Knight': { src: wolf,name: 'Basic Knight', type: 'garvinKnight', description: '', level: 5, hp: 15, maxHp: 15, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        special: {
            'Royal Guard': { src: wolf, name: 'Royal Guard', type: 'garvinKnight', description: '', level: 25, hp: 35, maxHp: 35, mp: 20, maxMp: 20, attackConfig: { attacks: ['Wide Slash', 'Imperial Thrust'] } },
            'Knight Ardius': { src: wolf, name: 'Knight Ardius', type: 'garvinKnight', description: '', level: 25, hp: 55, maxHp: 55, mp: 20, maxMp: 20, attackConfig: { attacks: ['Imperial Thrust', 'Wind Cutter', 'Blow Away'] } },
        }
    },
    pirate: {
        'Pirate': { src: wolf,name: 'Pirate', type: 'pirate', description: '', level: 5, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        special: {
            'Pirate Captain': { src: wolf, name: 'Pirate Captain', type: 'pirate', description: '', level: 25, hp: 55, maxHp: 55, mp: 20, maxMp: 20, attackConfig: { attacks: ['Sneaky Slash', 'Mini Bombs', 'Straight Shot', 'Dabloon Slice'] } },
        }
    },
    wolf: {
        'Young Dire Wolf': { src: wolf,name: 'Young Dire Wolf', type: 'wolf', description: '', level: 5, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        'Dire Wolf': { src: wolf,name: 'Dire Wolf', type: 'wolf', description: '', level: 9, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        special: {
            'Grand Dire Wolf': { src: wolf,name: 'Grand Dire Wolf', type: 'wolf', description: '', level: 14, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { attacks: ['Grand Slash', 'Dark Bite'] } },
            'King Dire Wolf': { src: kingDireWolf,name: 'King Dire Wolf', type: 'wolf', description: '', level: 25, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { attacks: ['Grand Slash', 'Monster Howl', 'Dark Bite', 'Shadow Ball']} },    
        },
    },

    snake: {
        'Aba Cobra': { src: wolf,name: 'Aba Cobra', type: 'snake', description: '', level: 5, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 1 } },
        'Abdu Cobra': { src: wolf,name: 'Abdu Cobra', type: 'snake', description: '', level: 10, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 1 } },
        special: {
            'Abdura Cobra': { src: wolf,name: 'Abdura Cobra', type: 'snake', description: '', level: 20, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { attacks: ['Venomous Bite', 'Buried Assault', 'Acid Spit', 'Petrify Stare'] } },
        }
       
    },
    slime: {
        'Blue Slime': { src: wolf,name: 'Blue Slime', type: 'slime', description: '', level: 5, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0 } },
        'Red Slime': { src: wolf,name: 'Red Slime', type: 'slime', description: '', level: 10, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0 } },
        special: {
            'King Slime': { src: wolf,name: 'King Slime', type: 'slime', description: '', level: 30, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 3 } },
        }
        
    },
    goblin: {
        'Goblin': { src: wolf,name: 'Goblin', type: 'globlin', description: '', level: 9, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 1 } },
        'Warrior Goblin': { src: wolf,name: 'Warrior Goblin', type: 'globlin', description: '', level: 16, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 2 } },
        special: {
            'Emperor Goblin': { src: wolf,name: 'Emperor Goblin', type: 'globlin', description: '', level: 25, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { attacks: ['Emperor Assault', 'Heal', 'Fire Ball'] } },
        }
       
    },
  

}
export default monsters
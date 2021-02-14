import wolf from '../../images/wolf.svg'
import kingDireWolf from '../../images/kingDireWolf.svg'
const monsters = {
    wolf: {
        'Young Dire Wolf': { src: wolf,name: 'Young Dire Wolf', type: 'wolf', description: '', level: 5, attackConfig: { common: 2, special: 0} },
        'Dire Wolf': { src: wolf,name: 'Dire Wolf', type: 'wolf', description: '', level: 9, attackConfig: { common: 2, special: 0} },
        special: {
            'Grand Dire Wolf': { src: wolf,name: 'Grand Dire Wolf', type: 'wolf', description: '', level: 14, attackConfig: { attacks: ['Grand Slash', 'Dark Bite'] } },
            'King Dire Wolf': { src: kingDireWolf,name: 'King Dire Wolf', type: 'wolf', description: '', level: 25, attackConfig: { attacks: ['Grand Slash', 'Monster Howl', 'Dark Bite', 'Shadow Ball']} },    
        },
    },
    bear: {
        'Cub Soldier': { src: wolf,name: 'Cub Soldier', type: 'bear', description: '', level: 5, attackConfig: { common: 2, special: 0} },
        'Bear Scout': { src: wolf,name: 'Bear Scout', type: 'bear', description: '', level: 8, attackConfig: { common: 2, special: 0} },
        'Bear Soldier': { src: wolf,name: 'Bear Soldier', type: 'bear', description: '', level: 12, attackConfig: { common: 2, special: 1} },
        special: {
            'Bear Leutinant': { src: wolf,name: 'Bear Leutinant', type: 'bear', description: '', level: 16, attackConfig: { common: 2, special: 2} },
            'Bear Captain': { src: wolf,name: 'Bear Captain', type: 'bear', description: '', level: 20, attackConfig: { attacks: ['Force Claw', 'Power Slash', 'Grand Blade'] } },
            'Bear General': { src: wolf,name: 'Bear General', type: 'bear', description: '', level: 25, attackConfig: { attacks: ['Force Claw', 'Ferocious Fury', 'Grand Blade', 'Earth Blast'] } },
           
        }
    },
    snake: {
        'Aba Cobra': { src: wolf,name: 'Aba Cobra', type: 'snake', description: '', level: 5, attackConfig: { common: 2, special: 1 } },
        'Abdu Cobra': { src: wolf,name: 'Abdu Cobra', type: 'snake', description: '', level: 10, attackConfig: { common: 2, special: 1 } },
        special: {
            'Abdura Cobra': { src: wolf,name: 'Abdura Cobra', type: 'snake', description: '', level: 20, attackConfig: { attacks: ['Venomous Bite', 'Buried Assault', 'Acid Spit', 'Petrify Stare'] } },
        }
       
    },
    slime: {
        'Blue Slime': { src: wolf,name: 'Blue Slime', type: 'slime', description: '', level: 5, attackConfig: { common: 2, special: 0 } },
        'Red Slime': { src: wolf,name: 'Red Slime', type: 'slime', description: '', level: 10, attackConfig: { common: 2, special: 0 } },
        special: {
            'King Slime': { src: wolf,name: 'King Slime', type: 'slime', description: '', level: 30, attackConfig: { common: 2, special: 3 } },
        }
        
    },
    goblin: {
        'Goblin': { src: wolf,name: 'Goblin', type: 'globlin', description: '', level: 9, attackConfig: { common: 2, special: 1 } },
        'Warrior Goblin': { src: wolf,name: 'Warrior Goblin', type: 'globlin', description: '', level: 16, attackConfig: { common: 2, special: 2 } },
        special: {
            'Emperor Goblin': { src: wolf,name: 'Emperor Goblin', type: 'globlin', description: '', level: 25, attackConfig: { attacks: ['Emperor Assault', 'Heal', 'Fire Ball'] } },
        }
       
    },
  

}
export default monsters
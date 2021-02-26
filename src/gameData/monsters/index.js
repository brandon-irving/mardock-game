import wolf from '../../images/wolf.svg'
import knightardius from '../../images/sprites/knightardius.gif'
import basicknight from '../../images/sprites/basicknight.gif'
import royalguard from '../../images/sprites/royalguard.gif'
import wolfknight from '../../images/sprites/wolfknight.gif'
import direwolfknight from '../../images/sprites/direwolfknight.gif'
import grandwolfknight from '../../images/sprites/grandwolfknight.gif'
import kingwolfknight from '../../images/sprites/kingwolfknight.gif'

const monsters = {
    wolf: {
        'Wolf Knight': { exp: 40,src: wolfknight,name: 'Wolf Knight', type: 'wolf', description: '', level: 5, hp: 35, maxHp: 35, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        special: {
            'Dire Wolf Knight': { exp: 140,src: direwolfknight,name: 'Dire Wolf Knight', type: 'wolf', description: '', level: 9, hp: 50, maxHp: 50, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
            'Grand Wolf Knight': { exp: 240,src: grandwolfknight,name: 'Grand Wolf Knight', type: 'wolf', description: '', level: 14, hp: 80, maxHp: 80, mp: 20, maxMp: 20, attackConfig: { attacks: ['Grand Slash', 'Dark Bite'] } },
            'King Wolf Knight': { exp: 340,src: kingwolfknight,name: 'King Wolf Knight', type: 'wolf', description: '', level: 25, hp: 120, maxHp: 120, mp: 20, maxMp: 20, attackConfig: { attacks: ['Grand Slash', 'Monster Howl', 'Dark Bite', 'Shadow Ball']} },    
        },
    },
    garvinKnight: {
        'Basic Knight': { exp: 30,src: basicknight, name: 'Basic Knight', type: 'garvinKnight', description: '', level: 5, hp: 20, maxHp: 20, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        special: {
            'Royal Guard': { exp: 240,src: royalguard, name: 'Royal Guard', type: 'garvinKnight', description: '', level: 25, hp: 120, maxHp: 120, mp: 50, maxMp: 50, attackConfig: { attacks: ['Wide Slash', 'Imperial Thrust'] } },
            'Knight Ardius': { exp: 550,src: knightardius, name: 'Knight Ardius', type: 'garvinKnight', description: '', level: 25, hp: 200, maxHp: 200, mp: 50, maxMp: 50, attackConfig: { attacks: ['Imperial Thrust', 'Wind Cutter', 'Blow Away'] } },
        }
    },


    bear: {
        'Cub Soldier': { exp: 40,src: wolf,name: 'Cub Soldier', type: 'bear', description: '', level: 5, hp: 20, maxHp: 20, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        'Bear Scout': { exp: 40,src: wolf,name: 'Bear Scout', type: 'bear', description: '', level: 8, hp: 20, maxHp: 20, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        'Bear Soldier': { exp: 40,src: wolf,name: 'Bear Soldier', type: 'bear', description: '', level: 12, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 1} },
        special: {
            'Bear Leutinant': { exp: 40,src: wolf,name: 'Bear Leutinant', type: 'bear', description: '', level: 16, hp: 30, maxHp: 30, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 2} },
            'Bear Captain': { exp: 40,src: wolf,name: 'Bear Captain', type: 'bear', description: '', level: 20, hp: 35, maxHp: 35, mp: 20, maxMp: 20, attackConfig: { attacks: ['Force Claw', 'Power Slash', 'Grand Blade'] } },
            'Bear General': { exp: 40,src: wolf,name: 'Bear General', type: 'bear', description: '', level: 25, hp: 45, maxHp: 45, mp: 20, maxMp: 20, attackConfig: { attacks: ['Force Claw', 'Ferocious Fury', 'Grand Blade', 'Earth Blast'] } },
           
        }
    },

    pirate: {
        'Pirate': { exp: 40,src: wolf,name: 'Pirate', type: 'pirate', description: '', level: 5, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0} },
        special: {
            'Pirate Captain': { exp: 40,src: wolf, name: 'Pirate Captain', type: 'pirate', description: '', level: 25, hp: 55, maxHp: 55, mp: 20, maxMp: 20, attackConfig: { attacks: ['Sneaky Slash', 'Mini Bombs', 'Straight Shot', 'Dabloon Slice'] } },
        }
    },

    snake: {
        'Aba Cobra': { exp: 40,src: wolf,name: 'Aba Cobra', type: 'snake', description: '', level: 5, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 1 } },
        'Abdu Cobra': { exp: 40,src: wolf,name: 'Abdu Cobra', type: 'snake', description: '', level: 10, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 1 } },
        special: {
            'Abdura Cobra': { exp: 40,src: wolf,name: 'Abdura Cobra', type: 'snake', description: '', level: 20, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { attacks: ['Venomous Bite', 'Buried Assault', 'Acid Spit', 'Petrify Stare'] } },
        }
       
    },
    slime: {
        'Blue Slime': { exp: 40,src: wolf,name: 'Blue Slime', type: 'slime', description: '', level: 5, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0 } },
        'Red Slime': { exp: 40,src: wolf,name: 'Red Slime', type: 'slime', description: '', level: 10, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 0 } },
        special: {
            'King Slime': { exp: 40,src: wolf,name: 'King Slime', type: 'slime', description: '', level: 30, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 3 } },
        }
        
    },
    goblin: {
        'Goblin': { exp: 40,src: wolf,name: 'Goblin', type: 'globlin', description: '', level: 9, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 1 } },
        'Warrior Goblin': { exp: 40,src: wolf,name: 'Warrior Goblin', type: 'globlin', description: '', level: 16, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { common: 2, special: 2 } },
        special: {
            'Emperor Goblin': { exp: 40,src: wolf,name: 'Emperor Goblin', type: 'globlin', description: '', level: 25, hp: 25, maxHp: 25, mp: 20, maxMp: 20, attackConfig: { attacks: ['Emperor Assault', 'Heal', 'Fire Ball'] } },
        }
       
    },
  

}
export default monsters
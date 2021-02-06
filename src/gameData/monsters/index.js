const monsters = {
    wolf: {
        'Young Dire Wolf': { name: 'Young Dire Wolf', type: 'wolf', description: '', level: 5, attackConfig: { common: 2, special: 0} },
        'Dire Wolf': { name: 'Dire Wolf', type: 'wolf', description: '', level: 9, attackConfig: { common: 2, special: 0} },
        special: {
            'Grand Dire Wolf': { name: 'Grand Dire Wolf', type: 'wolf', description: '', level: 14, attackConfig: { attacks: ['Grand Slash', 'Dark Bite'] } },
            'King Dire Wolf': { name: 'King Dire Wolf', type: 'wolf', description: '', level: 25, attackConfig: { attacks: ['Grand Slash', 'Monster Howl', 'Dark Bite', 'Shadow Ball']} },    
        },
    },
    bear: {
        'Cub Soldier': { name: 'Cub Soldier', type: 'bear', description: '', level: 5, attackConfig: { common: 2, special: 0} },
        'Bear Scout': { name: 'Bear Scout', type: 'bear', description: '', level: 8, attackConfig: { common: 2, special: 0} },
        'Bear Soldier': { name: 'Bear Soldier', type: 'bear', description: '', level: 12, attackConfig: { common: 2, special: 1} },
        special: {
            'Bear Leutinant': { name: 'Bear Leutinant', type: 'bear', description: '', level: 16, attackConfig: { common: 2, special: 2} },
            'Bear Captain': { name: 'Bear Captain', type: 'bear', description: '', level: 20, attackConfig: { attacks: ['Force Claw', 'Power Slash', 'Grand Blade'] } },
            'Bear General': { name: 'Bear General', type: 'bear', description: '', level: 25, attackConfig: { attacks: ['Force Claw', 'Ferocious Fury', 'Grand Blade', 'Earth Blast'] } },
           
        }
    },
    snake: {
        'Aba Cobra': { name: 'Aba Cobra', type: 'snake', description: '', level: 5, attackConfig: { common: 2, special: 1 } },
        'Abdu Cobra': { name: 'Abdu Cobra', type: 'snake', description: '', level: 10, attackConfig: { common: 2, special: 1 } },
        special: {
            'Abdura Cobra': { name: 'Abdura Cobra', type: 'snake', description: '', level: 20, attackConfig: { attacks: ['Venomous Bite', 'Buried Assault', 'Acid Spit', 'Petrify Stare'] } },
        }
       
    },
    slime: {
        'Blue Slime': { name: 'Blue Slime', type: 'slime', description: '', level: 5, attackConfig: { common: 2, special: 0 } },
        'Red Slime': { name: 'Red Slime', type: 'slime', description: '', level: 10, attackConfig: { common: 2, special: 0 } },
        special: {
            'King Slime': { name: 'King Slime', type: 'slime', description: '', level: 30, attackConfig: { common: 2, special: 3 } },
        }
        
    },
    goblin: {
        'Goblin': { name: 'Goblin', type: 'globlin', description: '', level: 9, attackConfig: { common: 2, special: 1 } },
        'Warrior Goblin': { name: 'Warrior Goblin', type: 'globlin', description: '', level: 16, attackConfig: { common: 2, special: 2 } },
        special: {
            'Emperor Goblin': { name: 'Emperor Goblin', type: 'globlin', description: '', level: 25, attackConfig: { attacks: ['Emperor Assault', 'Heal', 'Fire Ball'] } },
        }
       
    },
  

}
export default monsters
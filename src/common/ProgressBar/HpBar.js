import React, { useState, useEffect } from 'react'
import ProgressBar from '.'
import { useContextState } from 'dynamic-context-provider';
import { normalise } from '../../gameData/helpers'
import { accessories } from '../../gameData/items/accessories';
import { useStatSheet } from '../hooks/useStatSheet'
const HpBar = () => {
    const { 
        user: {
            character:  { hp, maxHp, equipped: {armor={hp: 0}, accessory={hp: 0}}} } 
        } = useContextState()
        const stats = useStatSheet()
        function getHp(){
            const currentHp = hp + armor.hp 
          return normalise(currentHp, maxHp)
        }
        const [gaugeValue, setgaugeValue] = useState(getHp())
        
        console.log('log: stats', {stats})
        
        useEffect(() => {
            setgaugeValue(getHp())
        }, [hp, armor])        
    return (
        <div style={{marginTop: '10px', marginBottom: '10px'}}>
{getHp() > 100 && <ProgressBar progress={gaugeValue - 100} color='teal' backgroundColor='green'/>}
 {getHp() <= 100 && <ProgressBar progress={gaugeValue} color='green' backgroundColor='black'/>}
        </div>
      
    )
}

export default HpBar

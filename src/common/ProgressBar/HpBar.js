import React, { useState, useEffect } from 'react'
import ProgressBar from '.'
import { useContextState } from 'dynamic-context-provider';
import { normalise } from '../../gameData/helpers'
import { useStatSheet } from '../hooks/useStatSheet'
import { useGetEquippedData } from '../hooks/useGetEquippedData'

const HpBar = () => {
    const { 
        user: {
            character:  { hp, maxHp, equipped: {armor={hp: 0}}} } 
        } = useContextState()
        const accessory = useGetEquippedData('accessory')
        const weapon = useGetEquippedData('weapon')
        const stats = useStatSheet()
        console.log('log: TODO-add stat modifiers', stats)
        
        function getHp(){
        const currentHp = hp + (armor.hp || 0) + (weapon.hp || 0) + (accessory.hp || 0)
          return normalise(currentHp, maxHp)
        }
        const [gaugeValue, setgaugeValue] = useState(getHp())
        
        
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

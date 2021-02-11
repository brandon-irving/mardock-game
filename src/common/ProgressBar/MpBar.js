import React, { useState, useEffect } from 'react'
import ProgressBar from '.'
import { useContextState } from 'dynamic-context-provider';
import { normalise } from '../../gameData/helpers'
import { accessories } from '../../gameData/items/accessories';

const MpBar = () => {
    const { 
        user: {
            character:  { mp, maxMp, equipped: {armor={mp: 0}, accessory={mp: 0}}} } 
        } = useContextState()
        function getMp(){
            const currentMp = mp + armor.mp
          return normalise(currentMp, maxMp)
        }
        const [gaugeValue, setgaugeValue] = useState(getMp())
        
        useEffect(() => {
            setgaugeValue(getMp())
        }, [mp])        
    return (
        <div style={{marginTop: '10px', marginBottom: '10px'}}>
{getMp() > 100 && <ProgressBar progress={gaugeValue - 100} color='light blue' backgroundColor='blue'/>}
 {getMp() <= 100 && <ProgressBar progress={gaugeValue} color='blue' backgroundColor='black'/>}
        </div>
      
    )
}

export default MpBar

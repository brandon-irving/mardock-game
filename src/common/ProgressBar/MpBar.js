import React, { useState, useEffect } from 'react'
import ProgressBar from '.'
import { useContextState } from 'dynamic-context-provider';
import { normalise } from '../../gameData/helpers'
// import { useStatSheet } from '../hooks/useStatSheet'
import { useGetEquippedData } from '../hooks/useGetEquippedData'

const MpBar = () => {
    const { 
        user: {
            character:  { mp, maxMp, equipped: {armor={mp: 0}}} } 
        } = useContextState()
        const accessory = useGetEquippedData('accessory')
        const weapon = useGetEquippedData('weapon')
        // const stats = useStatSheet()

        function getMp(){
        const currentMp = mp + (armor?.mp || 0) + (weapon?.mp || 0) + (accessory?.mp || 0)
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

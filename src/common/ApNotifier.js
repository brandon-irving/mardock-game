import React from 'react'
import { useContextState } from 'dynamic-context-provider';
import { useGetEquippedData } from './hooks/useGetEquippedData'
import { useStatSheet } from './hooks/useStatSheet'
import { Typography } from '@material-ui/core';

const ApNotifier = () => {
    const {
        user: {
            character: { ap, maxAp, equipped: { armor = { ap: 0 } } } }
    } = useContextState()
    const weapon = useGetEquippedData('weapon')
    const accessory = useGetEquippedData('accessory')
    const stats = useStatSheet()
    console.log('log: TODO-add stat modifiers', stats)
    function getAp(){
        const currentAp = ap + (armor.ap || 0) + (weapon.ap || 0) + (accessory.ap || 0)
      return currentAp
    }
    return (<Typography>{`AP: ${getAp()}/${maxAp}`}</Typography>)
}

export default ApNotifier

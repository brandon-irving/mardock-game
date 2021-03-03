import { useContextState } from 'dynamic-context-provider'
import { map } from 'lodash'
import React from 'react'
import { useGetSpells } from '../../common/hooks/useGetSpells'
import BaseForm from './BaseForm'

const SpellForm = ({targets, closeModal=()=>null}) => {
    const spells = useGetSpells()
    function onSubmit(){
        closeModal()
    }
    const convertedTargets = map(targets, monster=>{
        return {label: monster.name, value: monster.name}
    }) 
    
    return (
       <BaseForm targets={convertedTargets} onSubmit={onSubmit} type="Spell" options={spells} />
    )
}

export default SpellForm

import { useContextState } from 'dynamic-context-provider'
import { map } from 'lodash'
import React from 'react'
import { useGetSpells } from '../../common/hooks/useGetSpells'
import BaseForm from './BaseForm'

const SpellForm = ({monster, closeModal}) => {
    const spells = useGetSpells()
    function onSubmit(){
        closeModal()
    }
    const targets = map([monster], monster=>{
        return {label: monster.name, value: monster.name}
    }) 
    console.log('log: targets', targets)
    
    return (
       <BaseForm targets={targets} onSubmit={onSubmit} type="Spell" options={spells} />
    )
}

export default SpellForm

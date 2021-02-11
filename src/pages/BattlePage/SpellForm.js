import React from 'react'
import { useSpells } from '../../common/hooks/useSpells'
import BaseForm from './BaseForm'

const SpellForm = ({closeModal}) => {
    const spells = useSpells()
    function onSubmit(){
        closeModal()
    }
    return (
       <BaseForm onSubmit={onSubmit} type="Spell" options={spells} />
    )
}

export default SpellForm

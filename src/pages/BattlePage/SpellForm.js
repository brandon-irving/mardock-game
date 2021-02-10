import React from 'react'
import BaseForm from './BaseForm'

const SpellForm = ({closeModal}) => {
    return (
       <BaseForm onSubmit={closeModal} type="Spells" />
    )
}

export default SpellForm

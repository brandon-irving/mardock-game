import React from 'react'
import BaseForm from './BaseForm'

const AttackForm = ({closeModal}) => {
    return (
       <BaseForm onSubmit={closeModal} type="Attack" />
    )
}

export default AttackForm

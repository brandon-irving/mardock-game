import React from 'react'
import { useAttacks } from '../../common/hooks/useAttacks'
import BaseForm from './BaseForm'

const AttackForm = ({closeModal}) => {
    const attacks = useAttacks()
    function onSubmit(){
        closeModal()
    }
    return (
       <BaseForm onSubmit={onSubmit} type="Attack" options={attacks} />
    )
}

export default AttackForm

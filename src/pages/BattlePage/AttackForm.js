import { useContextState } from 'dynamic-context-provider'
import { map } from 'lodash'
import React from 'react'
import { useGetAttacks } from '../../common/hooks/useGetAttacks'
import BaseForm from './BaseForm'

const AttackForm = ({closeModal}) => {
    const attacks = useGetAttacks()
    function onSubmit(){        
        closeModal()
    }
    const { user: {character: {inView}}} = useContextState()
    const targets = inView ? map(inView, monster=>{
        return {label: monster.name, value: monster.name}
    }) : null
    
    return (
       <BaseForm targets={targets} onSubmit={onSubmit} type="Attack" options={attacks} />
    )
}

export default AttackForm

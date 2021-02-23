import { useContextState } from 'dynamic-context-provider'
import { map } from 'lodash'
import React from 'react'
import { useGetSkills } from '../../common/hooks/useGetSkills'
import BaseForm from './BaseForm'

const SkillForm = ({closeModal}) => {
    const skills = useGetSkills()
    function onSubmit(){        
        closeModal()
    }
    const { user: {character: {inView}}} = useContextState()
    const targets = inView ? map(inView, monster=>{
        return {label: monster.name, value: monster.name}
    }) : null
    
    return (
       <BaseForm targets={targets} onSubmit={onSubmit} type="Skill" options={skills} />
    )
}

export default SkillForm

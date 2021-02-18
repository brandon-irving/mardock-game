import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../../core/theme'
import { useGetUserOptions } from '../hooks'
import { initialCharacterObject } from '../../../gameData/player/initialCharacterObject'
import { statSheet } from '../../../gameData/constants' 
import { map, omit } from 'lodash'

const BluePrint = ({options}) => {
    return ({
        Rows: [
            {
                Cols: [
                    {
                        Input: {
                            id: 'target',
                            name: 'target',
                            type: 'select',
                            label: 'Target',
                            options
                        
                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        Input: {
                            id: 'hint',
                            name: 'hint',
                            type: 'text',
                            label: 'Hint'
                        
                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        Input: {
                            id: 'innerThoughts',
                            name: 'innerThoughts',
                            type: 'text',
                            label: 'Inner Thoughts'
                        
                        }
                    },
                ]
            },
           
            {
                Cols: [
                    {
                        style: { display: 'flex', justifyContent: 'flex-end' },
                        Button: {
                            id: 'submit',
                            name: 'submit',
                            type: 'submit',
                            label: 'Submit',
                            disabled: false,
                        }
                    },
                ]
            },
        ]
    })
}
const UpdateCharacterForm = () => {
    const updateTypeOptions = map(['Stats', 'Character'], type=>({label:type, value: type}))
    const {options: targets} = useGetUserOptions()
    const statOptions = map(Object.keys(statSheet), abbr=>{
        return {...statSheet[abbr], value: statSheet[abbr].label,}
    })
    const omittedCharObj = omit(initialCharacterObject, ['dmMessage', 'items', 'equipped', 'stats', 'techniques', 'title', 'class'])
    const characterHealthOptions = map((Object.keys(omittedCharObj)), abbr=>{
        return {label: abbr, value: abbr,}
    })

    // dmMessage, items
    function handleSubmit(values, formik) {
        window.alert(JSON.stringify(values))
        formik.resetForm()
    }
    return (
        <MuiFormGenerator
            theme={theme}
            blueprint={BluePrint({options: targets})}
            initialValues={{ hint: '', innerThoughts: '', target: targets[0] }}
            handleSubmit={handleSubmit}
        />
    )
}

export default UpdateCharacterForm

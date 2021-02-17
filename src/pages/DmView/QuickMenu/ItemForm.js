import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../../core/theme'
import { useContextState } from 'dynamic-context-provider'
import { map } from 'lodash'

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
const HintForm = () => {
    const { users } = useContextState()
    const userOptions = map(users, user=>{
        return {label: user.character.name, value: user.character.name}
    })
    const options =  [...userOptions, {label: 'all', value: 'all'}]
    function handleSubmit(values, formik) {
        window.alert(JSON.stringify(values))
        formik.resetForm()
    }
    
    return (
        <MuiFormGenerator
            theme={theme}
            blueprint={BluePrint({options})}
            initialValues={{ hint: '', innerThoughts: '', target: options[0] }}
            handleSubmit={handleSubmit}
        />
    )
}

export default HintForm

import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../../core/theme'
import { useGetUserOptions } from '../hooks'

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
    const {options} = useGetUserOptions()

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

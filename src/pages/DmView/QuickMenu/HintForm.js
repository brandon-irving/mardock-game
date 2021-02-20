import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../../core/theme'
import { useGetUserOptions } from '../hooks'
import { sendUserAMessage } from '../../../firebase'

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

    async function handleSubmit(values, formik) {
        await sendUserAMessage(values.target, {innerThoughts: values.innerThoughts, hint: values.hint})
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

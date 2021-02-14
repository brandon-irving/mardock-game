import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../../core/theme'
import { Typography } from '@material-ui/core'

const BluePrint = ({ values, type = 'base', options = [{ label: '', value: '' }], targets = [{ label: '', value: '' }] }) => {
    return ({
        Rows: [
            {
                Cols: [
                    {
                        Input: {
                            id: type,
                            name: type,
                            type: 'select',
                            options,
                            helperText: <>
                                <Typography style={{ fontWeight: 'bold', fontSize: '10pt' }}>Description</Typography>
                                <Typography style={{ fontSize: '10pt', marginBottom: '10px' }}>{values[type].description}</Typography>
                            </>
                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        Input: {
                            id: 'target',
                            name: 'target',
                            type: 'select',
                            label: 'Target',
                            options: targets

                        }
                    }
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
const defaultOptions = []
const defaultTargets = []

export default function UseBaseForm({ type = '', options = defaultOptions, targets = defaultTargets, onSubmit = () => { } }) {

    const initialValues = { [type]: options[0], target: targets[0] }
    const [values, setvalues] = React.useState(initialValues)

    if(!options.length)return 'None'

    function validate(values) {
        const errors = {}
        Object.keys(values).forEach(field => {
            const isEmpty = (!values[field]) || (typeof values[field] === 'string' && !values[field].length)
            if (isEmpty) {
                errors[field] = 'required'
            }
        })
        setvalues(values)
        return errors
    }
    
    function handleSubmit(values, formik) {
        window.alert(JSON.stringify(values))
        onSubmit()
        formik.resetForm()
    }
    return (
        <MuiFormGenerator
            theme={theme}
            manualValidate={validate}
            blueprint={BluePrint({ values, type, options, targets })}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
        />
    )
}


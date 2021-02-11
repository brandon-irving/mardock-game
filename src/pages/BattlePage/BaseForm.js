import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../core/theme'
import { Typography } from '@material-ui/core'

const BaseBluePrint = ({ values, type = 'base', options = [{ label: '', value: '' }], targets = [{ label: '', value: '' }] }) => {
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
                               {type !== 'Items' &&<> <Typography style={{ fontWeight: 'bold', fontSize: '10pt' }}>How to use</Typography>
                                <Typography style={{ fontSize: '10pt', marginBottom: '10px' }}>{values[type].rule}</Typography>
                                <Typography style={{ fontWeight: 'bold', fontSize: '10pt' }}>Cost</Typography>
                                <Typography style={{ fontSize: '10pt' }}>{values[type].useDescription}</Typography></>}
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
const defaultOptions = [{ description: 'This is a description', label: 'Long Sword', value: 'Long Sword' }, { description: 'This is another description', label: 'Short Sword', value: 'Short Sword' }]
const defaultTargets = [{ label: 'Monster 1', value: 'Monster 1' }, { label: 'Monster 2', value: 'Monster 2' }]
export default function BaseForm({ type = '', options = defaultOptions, targets = defaultTargets, onSubmit = () => { } }) {
    const initialValues = { [type]: options[0], target: targets[0] }
    const [values, setvalues] = React.useState(initialValues)

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
            blueprint={BaseBluePrint({ values, type, options, targets })}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
        />
    )
}


import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../../core/theme'
import { Typography } from '@material-ui/core'

const BluePrint = ({ values, type = 'base', options = [{ label: '', value: '' }]}) => {
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
                                <Typography style={{ fontSize: '10pt', marginBottom: '10px' }}>{values.equip.description}</Typography>
                            </>
                        }
                    },
                ]
            },
            {
                Cols: [
                    // { TODO: add bag storage system
                    //     style: { textAlign: 'center'},
                    //     Button: {
                    //         id: 'toss',
                    //         name: 'toss',
                    //         type: 'button',
                    //         label: 'Toss',
                    //         disabled: false,
                    //     }
                    // },
                    {
                        style: { display: 'flex', justifyContent: 'flex-end' },
                        Button: {
                            id: 'submit',
                            name: 'submit',
                            type: 'submit',
                            label: 'Equip',
                            disabled: false,
                        }
                    },
                ]
            },
            
        ]
    })
}
const defaultOptions = []

export default function EquipBaseForm({ type = '', options = defaultOptions, onSubmit = () => { } }) {
    const initialValues = { [type]: options[0]}
    const [values, setvalues] = React.useState(initialValues)

    if(!options.length)return 'None'
    const blueprint = BluePrint({ values, type, options })

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
    if(type === 'accessory' || type === 'specialItems'){
        blueprint.pop()
    }
    
    return (
        <MuiFormGenerator
            theme={theme}
            manualValidate={validate}
            blueprint={blueprint}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
        />
    )
}


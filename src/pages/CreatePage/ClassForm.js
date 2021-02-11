import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import theme from '../../core/theme'
import { classes } from '../../gameData/player/classes'
import { map } from 'lodash'

const BluePrint = (options) => {
    return ({
        Rows: [
            {
                Cols: [
                    {
                        Input: {
                            id: 'class',
                            name: 'class',
                            type: 'select',
                            label: 'class',
                            variant: 'filled',
                            options,
                        }
                    },
                ]
            },

        ]
    })
}
const defaultValues = {default: ''}

const ClassForm = ({initialValues=defaultValues, setvalues}) => {
    const options = map(Object.keys(classes), className=>{
        const classOption = classes[className]
        return {label: classOption.title, value:classOption.title}
    })
    function validate(values) {
        const errors = {}
        Object.keys(values).forEach(fieldName => {
            const field = values[fieldName]
            if(fieldName === 'class'){
                setvalues(field)
            }
            const isEmpty = (!field) || (typeof field === 'string' && !field.length)
            if (isEmpty) {
                errors[fieldName] = 'required'
            }
        })
        return errors
    }
console.log('log: initialValues', {initialValues, options})
    return (
        <div>
          <MuiFormGenerator
            theme={theme}
            manualValidate={validate}
            blueprint={BluePrint(options)}
            initialValues={initialValues}
        />   
        </div>
    )
}

export default ClassForm

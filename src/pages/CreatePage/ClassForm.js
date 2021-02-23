import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import theme from '../../core/theme'
import { classes } from '../../gameData/player/classes'
import { map } from 'lodash'
import { Typography } from '@material-ui/core'

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

const ClassForm = ({createUserObj, setavailablePoints, updateCharacter}) => {
    const { description, spells, attacks, starterWeapon } = classes[createUserObj.class]
    const initialValues= { class: createUserObj.class }
    const options = map(Object.keys(classes), className=>{
        const classOption = classes[className]
        return {...classOption, value:classOption.label}
    })


    function validate(values) {
        const errors = {}
        Object.keys(values).forEach(fieldName => {
            const field = values[fieldName]
            const isEmpty = (!field) || (typeof field === 'string' && !field.length)
            if (isEmpty) {
                updateCharacter({ class: null})
                errors[fieldName] = 'required'
                setavailablePoints(10)
            }else if(fieldName === 'class'){    
                setavailablePoints(10)
                updateCharacter({class: field.label})
            }

        })
        return errors
    }
    return (
        <div>
          <MuiFormGenerator
            theme={theme}
            manualValidate={validate}
            blueprint={BluePrint(options)}
            initialValues={initialValues}
        />   
        <Typography>Description:</Typography>
        <Typography style={{marginBottom: '20px'}}>{description}</Typography>
        { spells && <Typography >Learned Spell: {spells[0]}</Typography>}
        { attacks && <Typography>Learned Attack: {attacks[0]}</Typography>}
        </div>
    )
}

export default ClassForm

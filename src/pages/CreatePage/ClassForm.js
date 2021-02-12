import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import theme from '../../core/theme'
import { classes } from '../../gameData/player/classes'
import { forEach, map } from 'lodash'

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

const ClassForm = ({createUserObj, updateCharacter}) => {
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
            }else if(fieldName === 'class'){  
                // default all stats before class modification  
                forEach(Object.keys(createUserObj.stats),(statName) => {
                    createUserObj.stats[statName].points = 10
                });     
                       
                const stat = Object.keys(field.statBoost)[0] // str
                const statBoost = field.statBoost[stat] // 2
                const statObj = createUserObj.stats[stat] // {label: 'Strength'}
                const baseStat = statObj.points // 10

                updateCharacter({
                    class: field.label,
                    stats: {...createUserObj.stats, [stat]: {...statObj, points: baseStat + statBoost}} 
                })
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
        </div>
    )
}

export default ClassForm

import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import theme from '../../core/theme'
import weapons from '../../gameData/items/weapons'
import {classes} from '../../gameData/player/classes'

const BluePrint = (options, helperText) => {
    return ({
        Rows: [
            {
                Cols: [
                    {
                        Input: {
                            id: 'weapon',
                            name: 'weapon',
                            type: 'select',
                            label: 'Weapon',
                            variant: 'filled',
                            options,
                            helperText
                        }
                    },
                ]
            },
        ]
    })
}
const WeaponForm = ({initialValues, createUserObj, updateCharacter}) => {
    const weaponData = weapons[createUserObj.equipped.weapon]
    const statAbbr = Object.keys(weaponData.requirement)[0]
    
    const requiredText = `Minimum stat needed to use (${statAbbr ? `${statAbbr}: ${weaponData.requirement[statAbbr]}` : 'None'})`
    const options = Object.keys(weapons).map(weaponName=>{
        return { label: weaponName, value: weaponName}
    })
    
    function validate(values) {
        const errors = {}
        Object.keys(values).forEach(field => {
            const isEmpty = (!values[field]) || (typeof values[field] === 'string' && !values[field].length)
            if (isEmpty) {
                errors[field] = 'required'
            }
            if(field === 'weapon'){
                updateCharacter({equipped: {...createUserObj.equipped, weapon: values[field].value}})
            }
        })
        return errors
    }

    return (
        <div>
          <MuiFormGenerator
            theme={theme}
            manualValidate={validate}
            blueprint={BluePrint(options, requiredText)}
            initialValues={initialValues}
        />   
        </div>
    )
}

export default WeaponForm

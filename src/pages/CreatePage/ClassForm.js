import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import theme from '../../core/theme'
import { classes } from '../../gameData/player/classes'
import { forEach, map } from 'lodash'
import { Typography } from '@material-ui/core'
import { statSheet } from '../../gameData/constants'

const BluePrint = ({options, characterClass: value, }) => {
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
                            type: 'selectNative',
                            value,
                            options,
                        }
                    },
                ]
            },

        ]
    })
}
function statDescriptionGenerator(statDescription){
    const statTextArray = statDescription.split(' ')
    return map(statTextArray, statDesc=>{
        const isIncrease = statDesc.charAt([0]) === '+' && statDesc.charAt([1]) === '+'
        const isSlightDecrease = statDesc.charAt([0]) === '-'
        const isDecrease = statDesc.charAt([0]) === '-' && statDesc.charAt([1]) === '-'
        const statKey = statDesc.replace('+', '').replace('+', '').replace('-', '').replace('-', '')
        const fullStat = statSheet[statKey.toLowerCase()]
        let desiredModifier = 'slightly increases'
        if(isIncrease)desiredModifier = 'increases'
        if(isSlightDecrease)desiredModifier = 'slightly decreases'
        if(isDecrease)desiredModifier = 'decreases'
        let description = 'This class ' + desiredModifier
    
    
        return(<>
        <Typography>{description} your {fullStat.label}</Typography>
        </>)
    })


}
const ClassForm = ({createUserObj, setavailablePoints, updateCharacter}) => {
    
    const { description, spells, attacks, statDescription } = classes[createUserObj.class]
    const [characterClass, setcharacterClass] = React.useState(createUserObj.class)
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
                updateCharacter({class: field})                
                setcharacterClass(field)
            }

        })
        return errors
    }
    return (
        <div>
          <MuiFormGenerator
            theme={theme}
            manualValidate={validate}
            blueprint={BluePrint({options, characterClass})}
            initialValues={initialValues}
        />   
        <Typography>Stats:</Typography>
        {statDescriptionGenerator(statDescription)}
        <Typography style={{marginTop: '10px'}}>Ability:</Typography>
        <Typography style={{marginBottom: '20px'}}>{description}</Typography>
        { spells && <Typography >Learned Spell: {spells[0]}</Typography>}
        { attacks && <Typography>Learned Attack: {attacks[0]}</Typography>}
        </div>
    )
}

export default ClassForm

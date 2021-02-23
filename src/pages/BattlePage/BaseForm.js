import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../core/theme'
import { Typography } from '@material-ui/core'
import { useContextState } from 'dynamic-context-provider'
import { activateAbility, activateSpell } from '../../firebase'
import { find } from 'lodash'

const defaultTargets = [{ label: 'No Targets', value: 'No Targets' }]

const BaseBluePrint = ({ values, type = 'base', options = [{ label: '', value: '' }], targets = [{ label: '', value: '' }] }) => {
    const foundValue = find(options, {label: values[type]}) || {}
    return ({
        Rows: [
            {
                Cols: [
                    {
                        Input: {
                            id: type,
                            name: type,
                            type: 'selectNative',
                            value: values[type],
                            options,
                            subscript: <>
                                <Typography style={{ fontWeight: 'bold', fontSize: '10pt' }}>Description</Typography>
                                <Typography style={{ fontSize: '10pt', marginBottom: '10px' }}>{foundValue?.description}</Typography>
                               {type !== 'Items' &&<> <Typography style={{ fontWeight: 'bold', fontSize: '10pt' }}>How to use</Typography>
                                <Typography style={{ fontSize: '10pt', marginBottom: '10px' }}>{foundValue.rule}</Typography>
                                <Typography style={{ fontWeight: 'bold', fontSize: '10pt' }}>Cost</Typography>
                                <Typography style={{ fontSize: '10pt' }}>{foundValue.useDescription}</Typography></>}
                                {type === 'Items' && <Typography style={{ fontWeight: 'bold', fontSize: '10pt' }}>Quantity: {foundValue.quantity}</Typography>}

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
                            label: 'Target',
                            type: 'selectNative',
                            value: values.target.value,
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
                            disabled: targets[0].label === 'No Targets',
                        }
                    },
                ]
            },
        ]
    })
}
const errorMessageMap = {
    Attack: 'You dont know any specials with this weapon',
    Spell: "You don't know any spells" 
}

export default function BaseForm({ onSubmit=()=>{}, type = '', options, targets = defaultTargets }) {
    const { user } = useContextState()
    const initialValues = { [type]: options[0] ? options[0].value : '', target: targets ? targets[0].value : defaultTargets[0].value }
    const [values, setvalues] = React.useState(initialValues)
    
    if(!options.length) return errorMessageMap[type]
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
    async function handleSubmit(values) {
        const foundItem = find(options, { label: values[type]})
        console.log('log: user', {foundItem, character: user.character})
        let success = false
        if(type !== 'Spell'){            
            success = await activateAbility(user, foundItem.ap)
        }else{
            success = await activateSpell(user, foundItem.mp)
        }
        if(!success)return
        await onSubmit()
    }
    return (
        <MuiFormGenerator
            theme={theme}
            manualValidate={validate}
            blueprint={BaseBluePrint({ values, type, options, targets: targets || defaultTargets })}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
        />
    )
}


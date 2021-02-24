import React, { useEffect, useState} from 'react'
import { Grid, TextField, Typography, MenuItem, Button } from '@material-ui/core'
import { useContextState } from 'dynamic-context-provider'
import { useGetItems } from '../../hooks/useGetItems'
import { useGetTargets } from '../../hooks/useGetTargets'
import { itemUse } from '../../../firebase'
import { find, map } from 'lodash'



export default function UseBaseForm({ type = '' , onSubmit=()=>null}) {
    const { user, updateContextState } = useContextState()
    const [options, itemsGameData, dbItems] = useGetItems(undefined, type)
    const [targets, loading] = useGetTargets()
    const [target, settarget] = useState('')
    const [item, setitem] = useState(options[0] || {})

    function handleItemChange(event) {
        const item = find(options, {label: event.target.value})
        settarget(item);
    }

    function handleTargetChange(event) {
        const target = find(targets, {label: event.target.value})
        settarget(target);
        
    }
    async function handleSubmit() {
        updateContextState({globalLoading: true})
        await itemUse({ userGivingItem: user, type, target, item })        
        updateContextState({globalLoading: false})
        onSubmit()
    }

    useEffect(() => {
        settarget(targets[0])
    }, [loading])

    // useEffect(() => {
    //     setitem(options[0] || {})
    // }, [options])

    if (!target) return null
    return (
        <div>
            {options.length === 0 && <Typography align="center">No items available</Typography>}
            {options.length !== 0 &&
                <Grid style={{ marginTop: '30px' }} container>
                    <Grid style={{ marginBottom: '30px' }} item xs={12}>
                        <TextField
                            fullWidth
                            id='item'
                            select
                            value={item.label}
                            onChange={handleItemChange}
                        >
                            {map(options, (option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Typography>Quantity: {item.quantity}</Typography>
                    </Grid>
                    <Grid style={{ marginBottom: '30px' }} item xs={12}>
                        <TextField
                            fullWidth
                            id='target'
                            select
                            value={target.label}
                            onChange={handleTargetChange}
                        >
                            {map(targets, (option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" fullWidth onClick={handleSubmit}>Use Item</Button>
                    </Grid>

                </Grid>
            }

        </div>

    )
}


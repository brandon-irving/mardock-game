import React, { useEffect } from 'react'
import { Button, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import { useContextState } from 'dynamic-context-provider'
import { useGetItems } from '../../hooks/useGetItems'
import { equipItem } from '../../../firebase'
import { map, find } from 'lodash'
import { checkIfSkilledEnoughToEquip } from '../../helpers/checkIfSkilledEnoughToEquip.js'
import { launchErrorToaster } from '../../../core/toaster'


export default function EquipBaseForm({ type = '' }) {
    const { user, globalLoading, updateContextState } = useContextState()
    const [options, itemsGameData] = useGetItems(undefined, type)
    const { character: { items, equipped } } = user
    const [value, setvalue] = React.useState(options[0])

    const equippedFullInfo = itemsGameData[equipped[type]] || {}
    
    async function handleSubmit() {
        const isSkilledEnough = checkIfSkilledEnoughToEquip(itemsGameData[value?.label], user)
        if (!isSkilledEnough) return launchErrorToaster()
        updateContextState({ globalLoading: true })
        const newInitialEquipInBag = await equipItem({ user, items, newEquip: value?.label, type, itemsGameData })        
        setvalue({ label: newInitialEquipInBag })
        updateContextState({ globalLoading: false })
    }


    function handleChange(event) {
        const selectedEquip = find(options, { label: event.target.value })

        setvalue(selectedEquip);
    }

    useEffect(() => {
        let selectedEquip = find(options, { label: value?.label })
        if (!value) {
            selectedEquip = find(options, { label: equipped })
        }
        
        setvalue(selectedEquip)
    }, [globalLoading, user])

    if(globalLoading)return null
    return (
        <div>
            <Typography variant="h5" align="center">{Object.keys(equipped[type]).length > 0 ? `Equipped: ${equipped[type]}` : `Nothing Equipped`}</Typography>            
           {
           Object.keys(equipped[type]).length > 0 && type === 'weapon' && <> 
           <Typography align="center">
            Attack Roll: {equippedFullInfo.roll}    
            </Typography>   
            <Typography align="center">
            {equippedFullInfo.description}    
            </Typography>    
            </>
             }           
            
            {
                options.length === 0 && <Typography align="center">No other {type}s</Typography>
            }

            {options.length !== 0 &&
                <Grid style={{ marginTop: '30px' }} container>
                    <Grid style={{ marginBottom: '30px' }} item xs={12}>
                        <TextField
                            fullWidth
                            id={type}
                            select
                            value={value?.label}
                            onChange={handleChange}
                        >
                            {map(options, (option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" fullWidth onClick={handleSubmit}>Swap Equipped</Button>
                    </Grid>

                </Grid>
            }

        </div>

    )
}


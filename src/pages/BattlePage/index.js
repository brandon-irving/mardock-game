import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import DialogButton from '../../common/DialogButton'
import { useEquipped } from '../../common/hooks/useEquipped'
import HpBar from '../../common/ProgressBar/HpBar'
import MpBar from '../../common/ProgressBar/MpBar'
import sprite from '../../images/sprites/babynewt.png'
import MonsterView from './MonsterView'

const BattlePage = () => {
    return (
        <div>
<MonsterView />
            <Grid style={{textAlign: 'center', marginTop: '50vw'}} container >
                <Grid item xs={6}>
                    <DialogButton fullWidth variant="outlined">Attack</DialogButton>
                </Grid>
                <Grid item xs={6}>
                    <DialogButton fullWidth variant="outlined">Spells</DialogButton>
                </Grid>
                <Grid item xs={6}>
                    <DialogButton fullWidth variant="outlined">Items</DialogButton>
                </Grid>
                <Grid item xs={6}>
                    <DialogButton fullWidth variant="outlined">Evade</DialogButton>
                </Grid>
            </Grid>
            <div>
                <HpBar />
                <MpBar />
            </div>
        </div>

    )
}

export default BattlePage

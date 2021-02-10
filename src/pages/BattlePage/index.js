import { Grid } from '@material-ui/core'
import React from 'react'
import DialogButton from '../../common/DialogButton'
import HpBar from '../../common/ProgressBar/HpBar'
import MpBar from '../../common/ProgressBar/MpBar'
import AttackForm from './AttackForm'
import ItemsForm from './ItemsForm'
import SpellForm from './SpellForm'
import MonsterView from './MonsterView'

const BattlePage = () => {
    const [aopen, setaopen] = React.useState(false)
    const [sopen, setsopen] = React.useState(false)
    const [iopen, setiopen] = React.useState(false)
    return (
        <div>
            <MonsterView />
            <Grid style={{ textAlign: 'center', marginTop: '50vw' }} container >
                <Grid item xs={6}>
                    <DialogButton
                        dialog={{
                            open: aopen,
                            setopen: setaopen,
                            title: 'Attacks',
                            content: <AttackForm closeModal={()=>setaopen(false)} />,
                        }}

                        fullWidth
                        variant="outlined"
                    >Attack</DialogButton>
                </Grid>
                <Grid item xs={6}>
                    <DialogButton
                        dialog={{
                            open: sopen,
                            setopen: setsopen,
                            title: 'Spells',
                            content: <SpellForm closeModal={()=>setsopen(false)}/>,
                        }}

                        fullWidth
                        variant="outlined"
                    >Spell</DialogButton>
                </Grid>
                <Grid item xs={6}>
                    <DialogButton
                        dialog={{
                            title: 'Items',
                            content: <ItemsForm closeModal={()=>setiopen(false)}/>,
                            open: iopen,
                            setopen: setiopen
                        }}

                        fullWidth
                        variant="outlined"
                    >Items</DialogButton>
                </Grid>
                <Grid item xs={6}>
                    <DialogButton
                        fullWidth variant="outlined">Evade</DialogButton>
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

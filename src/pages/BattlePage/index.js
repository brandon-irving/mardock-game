import { Grid } from '@material-ui/core'
import React from 'react'
import DialogButton from '../../common/DialogButton'
import HpBar from '../../common/ProgressBar/HpBar'
import MpBar from '../../common/ProgressBar/MpBar'
import AttackForm from './AttackForm'
import ItemsForm from './ItemsForm'
import SpellForm from './SpellForm'
import SkillForm from './SkillForm'

import ApNotifier from '../../common/ApNotifier'
import MonsterList from './MonsterList'

const BattlePage = () => {
    const [aopen, setaopen] = React.useState(false)
    const [sopen, setsopen] = React.useState(false)
    const [iopen, setiopen] = React.useState(false)
    const [skopen, setskopen] = React.useState(false)
    const [monster, setmonster] = React.useState(null)

    return (
        <div>
            <MonsterList monster={monster} setmonster={setmonster}/>
            <Grid style={{ textAlign: 'center', marginTop: '50vw' }} container >
                <Grid item xs={6}>
                    <DialogButton
                    disabled={!monster}
                        dialog={{
                            open: aopen,
                            setopen: setaopen,
                            title: 'Attacks',
                            content: <AttackForm monster={monster} closeModal={()=>setaopen(false)} />,
                        }}

                        fullWidth
                        variant="outlined"
                    >Attack</DialogButton>
                </Grid>
                <Grid item xs={6}>
                    <DialogButton
                    disabled={!monster}
                        dialog={{
                            open: sopen,
                            setopen: setsopen,
                            title: 'Spells',
                            content: <SpellForm monster={monster} closeModal={()=>setsopen(false)}/>,
                        }}

                        fullWidth
                        variant="outlined"
                    >Spell</DialogButton>
                </Grid>
                <Grid item xs={6}>
                <DialogButton
                    disabled={!monster}
                        dialog={{
                            title: 'Skills',
                            content: <SkillForm closeModal={()=>setskopen(false)}/>,
                            open: skopen,
                            setopen: setskopen
                        }}

                        fullWidth
                        variant="outlined"
                    >Skills</DialogButton>
                </Grid>
                <Grid item xs={6}>
                    <DialogButton
                    disabled={!monster}
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
            </Grid>
            <div>
                <HpBar />
                <MpBar />
                <ApNotifier />
               
            </div>
        </div>

    )
}

export default BattlePage

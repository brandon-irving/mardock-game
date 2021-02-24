import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import DialogButton from '../../common/DialogButton'
import HpBar from '../../common/ProgressBar/HpBar'
import MpBar from '../../common/ProgressBar/MpBar'
import AttackForm from './AttackForm'
import ItemsForm from './ItemsForm'
import SpellForm from './SpellForm'
import SkillForm from './SkillForm'

import ApNotifier from '../../common/ApNotifier'
import MonsterList from './MonsterList'
import { useStatSheet } from '../../common/hooks/useStatSheet'
import { forEach, map } from 'lodash'
import RollBoosts from '../../common/RollBoosts'

const BattlePage = () => {
    const stats = useStatSheet()
    const [aopen, setaopen] = useState(false)
    const [sopen, setsopen] = useState(false)
    const [iopen, setiopen] = useState(false)
    const [skopen, setskopen] = useState(false)
    const [monster, setmonster] = useState(null)

    const battleRollBoosts = []
    forEach(Object.keys(stats), (abbr, i)=>{
        const stat = stats[abbr]
        let statMessage = `${abbr.toUpperCase()}: ${stat.points}`
        if(stat.statBoost > 0){
            battleRollBoosts.push( statMessage + ` +${stat.statBoost}`)
        }
     })
    return (
        <div>
            <MonsterList monster={monster} setmonster={setmonster}/>
        <div>
            <Grid style={{ textAlign: 'center', marginTop: '20vw' }} container>
                <RollBoosts />
                <Grid container>
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

            </Grid>
            <div>
                <HpBar />
                <MpBar />
                <ApNotifier />
               
            </div>
            </div>
        </div>

    )
}

export default BattlePage

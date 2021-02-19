import React from 'react'
import PlayerCard from './PlayerCard'
import { useContextState } from 'dynamic-context-provider';
import { Grid } from '@material-ui/core';
import { map } from 'lodash';
import { useGetBattle } from '../../../common/hooks/useGetBattle'
import BattleTable from './BattleTable'

const Battle = () => {
    const initialBattle = useGetBattle('tutorialBattle1')
    const { users } = useContextState()
    return (
        <div>
            <Grid spacing={3} container>
            <Grid item xs={12} md={6}>
                    <BattleTable />
                </Grid>
                <Grid style={{maxHeight: '75vh', overflow: 'scroll'}} item xs={12} md={6}>
                {
                    map(users, (user, i)=>{
                        return (
                        <Grid style={{marginBottom: '20px'}} key={i} item xs={12}>
                        <PlayerCard targets={initialBattle.monsters}  character={user.character} />
                        </Grid>
                        )
                    })
                }
                </Grid>
                
                
            </Grid>
            
        </div>
    )
}

export default Battle

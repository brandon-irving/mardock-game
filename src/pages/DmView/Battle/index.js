import React from 'react'
import PlayerCard from './PlayerCard'
import { useContextState } from 'dynamic-context-provider';
import { Grid } from '@material-ui/core';
import { map } from 'lodash';
import { useGetBattle } from '../../../common/hooks/useGetBattle'
const Battle = () => {
    const initialBattle = useGetBattle('tutorialBattle1')
    const { users, globalLoading } = useContextState()
    if(globalLoading)return null
    return (
        <div>
            <Grid spacing={3} container>
                {
                    map(users, (user, i)=>{
                        return (
                            <Grid key={i} item xs={6}>
                        <PlayerCard targets={initialBattle.monsters}  character={user.character} />
                        </Grid>
                        )
                    })
                }
            </Grid>
            
        </div>
    )
}

export default Battle

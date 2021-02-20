import React from 'react'
import PlayerCard from './PlayerCard'
import { useContextState } from 'dynamic-context-provider';
import { Button, Grid } from '@material-ui/core';
import { map } from 'lodash';
// import { useGetBattle } from '../../../common/hooks/useGetBattle'
import BattleTable from './BattleTable'
import LoadingContainer from '../../../common/LoadingContainer';
import { battles } from '../../../gameData/battles';
const Battle = () => {
    const initialBattle = battles['tutorialBattle1']
    const { users } = useContextState()
console.log('log: initialBattle', initialBattle)
    return (
        <div>
            <Grid spacing={3} container>
         
                <Grid style={{maxHeight: '75vh', overflow: 'scroll'}} item xs={12} md={6}>
                <LoadingContainer loading={!initialBattle.monsters?.length}>
                {
                    map(users, (user, i)=>{
                        return (
                            
                        <Grid style={{marginBottom: '20px'}} key={i} item xs={12}>
                        <PlayerCard targets={initialBattle?.monsters}  user={user} />
                        </Grid>
                       
                        )
                    })
                }
             </LoadingContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LoadingContainer loading={!initialBattle.monsters?.length}>
                    <BattleTable />
                    </LoadingContainer>
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default Battle

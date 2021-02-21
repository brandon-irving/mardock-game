import React from 'react'
import PlayerCard from './PlayerCard'
import { useContextState } from 'dynamic-context-provider';
import {  Grid } from '@material-ui/core';
import { map } from 'lodash';
import { useGetBattle } from '../../../common/hooks/useGetBattle'
import BattleTable from './BattleTable'
import SelectBattleForm from './SelectBattleForm';

const Battle = () => {
    const [battle, loading] = useGetBattle()
    const { users } = useContextState()
    
    if(loading)return null
    return (
            <Grid justify="center" spacing={3} container>
          {!battle && <SelectBattleForm />}
               {battle &&  <>
                <Grid style={{maxHeight: '75vh', overflow: 'scroll'}} item xs={12} md={6}>
                {
                    map(users, (user, i)=>{
                        return (
                            
                        <Grid style={{marginBottom: '20px'}} key={i} item xs={12}>
                        <PlayerCard targets={battle.monsters}  user={user} />
                        </Grid>
                       
                        )
                    })
                }
                </Grid>
                <Grid item xs={12} md={6}>
                    <BattleTable battle={battle} />
                </Grid>
                </>}
            </Grid>
                )
}

export default Battle

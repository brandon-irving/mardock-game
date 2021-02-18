import React from 'react'
import PlayerCard from './PlayerCard'
import { useContextState } from 'dynamic-context-provider';
import { Grid } from '@material-ui/core';

const Battle = () => {
    const { users } = useContextState()
    return (
        <div>
            <Grid container>
            <Grid item xs={3}>
            <PlayerCard character={users[0].character} />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Battle

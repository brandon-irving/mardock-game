import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { forEach, map } from 'lodash'
import { useStatSheet } from './hooks/useStatSheet'

const RollBoosts = ({isLevelUp, manualStats, oldStats}) => {
    const stats = useStatSheet(manualStats)
    const battleRollBoosts = []
    const title = isLevelUp ? `You Leveled Up!` : 'Roll Boosts'
    forEach(Object.keys(stats), (abbr, i)=>{
        const stat = stats[abbr]
        let statMessage = `${abbr.toUpperCase()}: ${stat.points}`
        
        if(isLevelUp){
            const oldStat = oldStats[abbr]
            statMessage = `${abbr.toUpperCase()}: ${oldStat.points}`
            battleRollBoosts.push( statMessage + ` -> ${stat.points}`)
        }else if(stat.statBoost > 0){
            battleRollBoosts.push( statMessage + ` +${stat.statBoost}`)
        }
     })
    return (
        <Grid style={{marginTop: '20px', marginBottom: '20px'}} container>
        <Grid item xs={12}><Typography>{title}</Typography></Grid>
    {map(battleRollBoosts, (message, i)=>{
                return(<Grid key={i} item xs={4}>{message}</Grid>)
            })}  
        </Grid>
    )
}

export default RollBoosts

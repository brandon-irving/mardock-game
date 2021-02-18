import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStatSheet } from '../../../common/hooks/useStatSheet';
import { CardActionArea, Grid } from '@material-ui/core';
import { map } from 'lodash';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});
/*
ap: 10
class: "Knight"
dmMessage: {hint: null, innerThoughts: null}
equipped: {weapon: "Short Sword", secondaryWeapon: "", armor: {…}, accessory: ""}
exp: 0
gil: 0
hp: 10
items: {weapon: {…}, specialItem: {…}, accessory: {…}, armor: {…}, misc: {…}}
level: 1
maxAp: 10
maxHp: 10
maxMp: 10
mp: 10
name: "Brandon Irving"
stats: {spd: 10, eva: 10, dex: 10, str: 12, vit: 10, …}
techniques: {attacks: {…}, spells: Array(0)}
title: "Novice Adventur
*/
export default function PlayerCard({character}) {
    const { gil, name, level, exp, hp, maxHp, mp, maxMp} = character
    const stats = useStatSheet(character.stats)

  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardActionArea>
      <CardContent>
        <Typography fontSize={24}  color="textSecondary" gutterBottom>
          {name} - Level {level}
        </Typography>
        <Typography fontSize={14} color="textSecondary" gutterBottom>
          Experience: {exp}
        </Typography>
        <Typography fontSize={14} color="textSecondary" gutterBottom>
          {gil} Gil
        </Typography>
        <Typography fontSize={14} color="textSecondary" gutterBottom>
           HP: {hp}/{maxHp} 
           <span style={{marginLeft: '5px'}}> MP: {mp}/{maxMp}</span>
        </Typography>
        {map(Object.keys(stats), (abbr, i)=>{
                       const stat = stats[abbr]
                       let statMessage = `${stat.label.toUpperCase()}: ${stat.points}`
                       if(stat.statBoost > 0){
                        statMessage = statMessage + ` +${stat.statBoost}`
                       }
                        return(<Grid key={i} item xs={12}><Typography >{statMessage}</Typography></Grid>)
                    })}   
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

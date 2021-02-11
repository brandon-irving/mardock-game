import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { map } from 'lodash';
import NumericInput from 'react-numeric-input';
import { convertStatSheet } from '../../common/hooks/useStatSheet';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Stat = ({updateCharacterStat, stat, availablePoints, setavailablePoints}) => {
    const maxStatIncrease = 5
    const [statPoint, setstatPoints] = useState(stat.points - 10)
    const textColor = statPoint >=3 ? 'green' : 'red'
    function handleStateChange(value){

        setstatPoints((oldValue)=>{
            let newAvailablePoints = availablePoints - 1
            let updateValue = 1
            if(availablePoints <= 0 || oldValue > value ){
                newAvailablePoints = availablePoints + 1
                updateValue = -1
            }
            setavailablePoints(newAvailablePoints)
            updateCharacterStat(stat.abbr, updateValue)
            return value
        })
    }
    const max = !availablePoints ? statPoint : maxStatIncrease
    const rollBonusText = stat.statBoost ? `(Roll +${stat.statBoost})` : ''
    return(
        <div style={{textAlign: 'center'}}>
        <ListItem key={stat.abbr} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={stat.abbr} >{stat.abbr}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${stat.title}: ${stat.points} ${rollBonusText}`}
          secondary={stat.description}
        />
       
      </ListItem>
             <NumericInput 
                onChange={handleStateChange} 
                style={{input: {fontSize: '14pt',color: textColor, width: '100px', height: '40px'}}} 
                mobile={true} 
                min={0}
                max={max} 
                value={statPoint}
            />
        </div>
       
    )
}


export default function StatsForm({characterStats, setcharacterStats, availablePoints, setavailablePoints}) {
  const classes = useStyles();
  const statObj = convertStatSheet(characterStats)
  function updateCharacterStat(key, value){
    const newCharStats = {...statObj}
    newCharStats[key].points = newCharStats[key].points + value
    setcharacterStats(convertStatSheet(newCharStats))
  }
  return (
    <List className={classes.root}>
        <p>{availablePoints}</p>
        {
            map(Object.keys(statObj), abbr=>{
                const stat = {...characterStats[abbr], abbr}
               return <Stat updateCharacterStat={updateCharacterStat} stat={stat} availablePoints={availablePoints} setavailablePoints={setavailablePoints}/>
            })
        }
    </List>
  );
}
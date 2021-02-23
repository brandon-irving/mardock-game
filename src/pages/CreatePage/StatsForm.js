import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { cloneDeep, map } from 'lodash';
import NumericInput from 'react-numeric-input';
import { useStatSheet } from '../../common/hooks/useStatSheet';

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
    const [initialStatPoint] = useState(stat.points - 10)
    const [statPoint, setstatPoints] = useState(stat.points - 10)
    const textColor = statPoint >=3 ? 'green' : 'red'

    function handleStateChange(value){
        setstatPoints((oldValue)=>{
            let newAvailablePoints = availablePoints - 1
            let updateValue = 1
            if(availablePoints <= 0 || oldValue > value){
                newAvailablePoints = availablePoints + 1
                updateValue = -1
            }
  
            setavailablePoints(newAvailablePoints)
            updateCharacterStat(stat.abbr, updateValue)
            return oldValue + updateValue
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
          primary={`${stat.label}: ${stat.points} ${rollBonusText}`}
          secondary={stat.description}
        />
       
      </ListItem>
             <NumericInput 
                onChange={handleStateChange} 
                style={{input: {fontSize: '14pt',color: textColor, width: '100px', height: '40px'}}} 
                mobile={true} 
                min={initialStatPoint}
                max={max} 
                value={statPoint}
            />
        </div>
       
    )
}


export default function StatsForm({
  updateCharacter, createUserObj, availablePoints, setavailablePoints}) {
  const classes = useStyles();
const desiredStats = useStatSheet(createUserObj.stats)
  function updateCharacterStat(key, value){
    const newCharStats = {...desiredStats}
    newCharStats[key].points = newCharStats[key].points + value
    updateCharacter({stats: newCharStats})
  }
  
  return (
    <List className={classes.root}>
        <p>{availablePoints}</p>
        {
            map(Object.keys(desiredStats), (abbr, i)=>{
                const stat = {...desiredStats[abbr], abbr}
               return <Stat key={i} updateCharacterStat={updateCharacterStat} stat={stat} availablePoints={availablePoints} setavailablePoints={setavailablePoints}/>
            })
        }
    </List>
  );
}
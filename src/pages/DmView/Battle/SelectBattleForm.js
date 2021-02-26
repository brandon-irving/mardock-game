import React from 'react'
import {battles, convertToBattle} from '../../../gameData/battles'
import convertToOptions  from '../../../common/helpers/convertToOptions' 
import { TextField, MenuItem, Card, Grid, Button } from '@material-ui/core'
import { map } from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import { startBattle } from '../../../firebase'
import { useContextState } from 'dynamic-context-provider'

const useStyles = makeStyles({
    container: {
        
    },
    card: {
        minWidth: 600,
        minHeight: 400,
        padding: '60px',
    },
  });
const SelectBattleForm = () => {
  const { users } = useContextState() 
    const classes = useStyles()
    const battleOptions = convertToOptions(battles, true)
    const [battle, setbattle] = React.useState(battleOptions[0].label)
    function handleChange(e){
        setbattle(e.target.value)
    }
    async function handleClick(){
        const battleInfo = battles[battle]
        // const createPvpBattle = convertToBattle(users)
        // console.log('log: battleInfo', {battleInfo, createPvpBattle})
        await startBattle(battleInfo)
    }
    return (
        <Grid item className={classes.container}>
 <Card className={classes.card}>
             <TextField
          id="battle"
          select
          label="Battles"
          value={battle}
          onChange={handleChange}
          fullWidth
        >
          {map(battleOptions, (option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           <MenuItem value='PVP'>
           PVP
            </MenuItem>
        </TextField>
        
        </Card>
        <Button onClick={handleClick}>Start Battle</Button>
        </Grid>
       
    )
}

export default SelectBattleForm

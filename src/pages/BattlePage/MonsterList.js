import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { map } from 'lodash';
import ImageIcon from '../../common/ImageIcon'
import MonsterView from './MonsterView'
import { useContextState } from "dynamic-context-provider";
import { useGetBattle } from '../../common/hooks/useGetBattle'
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MonsterList({monster, setmonster}) {
    const { user } = useContextState()
    const [initialBattle, loading] = useGetBattle(user)
    function closeMonsterView(){
        setmonster(null)
    }
    const classes = useStyles();
    return (
        <>
         {monster !== null && <MonsterView battle={initialBattle} monsterName={monster.name} close={closeMonsterView}/>}
        
           
            { !monster && initialBattle?.monsters.length > 0 &&
            <Grid container>
            <Grid item xs={12}><Typography>Enemies in View</Typography></Grid>
            <div className={classes.root}>
            <List component="nav" aria-label="monster-list">
                {
                    map(initialBattle.monsters, (monster, i) => {
                        return (
                            <React.Fragment key={i}>
                               <ListItem button onClick={()=>setmonster(monster)}>
                                        <ListItemIcon>
                                            <ImageIcon width="50px" src={monster.src} />
                                        </ListItemIcon>
                                        <ListItemText primary={monster.name} />
                                    </ListItem>

                                {initialBattle.monsters[i + 1] !== undefined && <Divider />}
                            </React.Fragment>
                        )
                    })
                }
            </List>
            </div>
            </Grid> 
            }
            { !initialBattle?.monsters.length > 0 && !loading && <Typography>No Enemies Within Striking Range</Typography>}
        </>
    );
}
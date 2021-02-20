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
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MonsterList() {
    const { user } = useContextState()
    const [initialBattle, loading] = useGetBattle(user)
    const [monster, setmonster] = React.useState(null)
    function closeMonsterView(){
        setmonster(null)
    }
    const classes = useStyles();
    return (
        <>
         {
                monster !== null && <MonsterView battle={initialBattle} monsterName={monster.name} close={closeMonsterView}/>
            }
        <div className={classes.root}>
           
            { !monster && initialBattle?.monsters.length > 0 &&
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
            </List> }
            { !initialBattle?.monsters.length > 0 && !loading && <Typography>No Monsters Within Striking Range</Typography>}
        </div>
        </>
    );
}
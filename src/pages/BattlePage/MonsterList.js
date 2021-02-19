import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useGetBattle } from '../../common/hooks/useGetBattle'
import { flatMap, forEach, map } from 'lodash';
import ImageIcon from '../../common/ImageIcon'
import monsters from '../../gameData/monsters';
import { buildMonster, generateMonsters } from '../../gameData/monsters/builders';
import DialogButton from '../../common/DialogButton';
import { Close } from '@material-ui/icons';
import MonsterView from './MonsterView'
import { startBattle } from '../../firebase';
import { useContextState } from "dynamic-context-provider";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MonsterList() {
    const initialBattle = useGetBattle('tutorialBattle1')

    const {battle, updateContextState} = useContextState() 
    const { monsters } = battle
    const [monster, setmonster] = React.useState(null)
    function closeMonsterView(){
        setmonster(null)
    }
    const classes = useStyles();

    React.useEffect(() => {
        if(!initialBattle.monsters.length)return
        updateContextState({battle: initialBattle})

        startBattle(initialBattle)
    }, [initialBattle])
    if (!monsters) return null
    return (
        <>
         {
                monster !== null && <MonsterView monsterName={monster.name} close={closeMonsterView}/>
            }
        <div className={classes.root}>
           
            {!monster && <List component="nav" aria-label="monster-list">
                {
                    map(monsters, (monster, i) => {
                        return (
                            <React.Fragment key={i}>
                               <ListItem button onClick={()=>setmonster(monster)}>
                                        <ListItemIcon>
                                            <ImageIcon width="50px" src={monster.src} />
                                        </ListItemIcon>
                                        <ListItemText primary={monster.name} />
                                    </ListItem>

                                {monsters[i + 1] !== undefined && <Divider />}
                            </React.Fragment>
                        )
                    })
                }
            </List>}
        </div>
        </>
    );
}
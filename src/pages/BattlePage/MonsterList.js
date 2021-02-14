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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MonsterList() {
    const { monsters } = useGetBattle()
    const [open, setopen] = React.useState(false)
    const classes = useStyles();
    const dialog = {
        fullScreen: true,
        open,
        setopen,
        title: 'Enemy Battle',
        content: <div  />,
    }


    if (!monsters) return null
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="monster-list">
                {
                    map(monsters, (monster, i) => {
                        return (
                            <React.Fragment key={i}>
                                <DialogButton
                                    dialog={dialog}
                                    fullWidth
                                >
                                    <ListItem>
                                        <ListItemIcon>
                                            <ImageIcon width="50px" src={monster.src} />
                                        </ListItemIcon>
                                        <ListItemText primary={monster.name} />
                                    </ListItem>
                                </DialogButton>

                                {monsters[i + 1] !== undefined && <Divider />}
                            </React.Fragment>
                        )
                    })
                }
            </List>
        </div>
    );
}
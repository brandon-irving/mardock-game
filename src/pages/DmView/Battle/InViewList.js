import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { filter, find, map } from 'lodash';
import { Divider, Typography } from '@material-ui/core';
import { updateCharacter } from '../../../firebase';
import { useContextState } from 'dynamic-context-provider';
import LoadingContainer from '../../../common/LoadingContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  paper: {
    width: 200,
    height: 230,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function initialViewList(userInView, targets){
    const inView = userInView ? userInView : []
    const notInView =  filter(targets, target=>!find(userInView, {name: target.name}))
    return [notInView, inView]
}
export default function InViewList({user, targets}) {
const [initialNotInView, initialInView] = initialViewList(user.character.inView, targets)
  const classes = useStyles();
  const [loading, setloading] = React.useState(false);
  const [checked, setChecked] = React.useState([]);
  const [notInView, setLeft] = React.useState(initialNotInView);
  const [inView, setRight] = React.useState(initialInView);
  const leftChecked = intersection(checked, notInView);
  const rightChecked = intersection(checked, inView);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(inView.concat(notInView));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(inView.concat(leftChecked));
    setLeft(not(notInView, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(notInView.concat(rightChecked));
    setRight(not(inView, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(notInView.concat(inView));
    setRight([]);
  };

  const customList = (items) => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {map(items, (value, i) => {
            const { name } = value
          const labelId = `transfer-list-item-${name}-label`;

          return (
            <ListItem key={i} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={name} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  async function addMonstersToUserSight(){
    setloading(true)
    let addInView = null
    if(inView.length){
        addInView = map(inView, monster=>{
            return { name: monster.name}
        })
    }
   await updateCharacter(user,{'character.inView': addInView}, true)
   setloading(false)

}
  return (
    <LoadingContainer loading={loading}>
    <Grid  container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>
          <Typography>Not in view</Typography>
          <Divider />
          {customList(notInView)}
          </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={notInView.length === 0}
            aria-label="move all inView"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected inView"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected notInView"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={inView.length === 0}
            aria-label="move all notInView"
          >
            ≪
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={addMonstersToUserSight}
            aria-label="addMonstersToUserSight"
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid item>
      <Typography>In view</Typography>
      <Divider />
          {customList(inView)}
          </Grid>
    </Grid>
    </LoadingContainer>
  );
}

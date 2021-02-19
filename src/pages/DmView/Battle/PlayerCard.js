import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStatSheet } from '../../../common/hooks/useStatSheet';
import { Accordion, AccordionDetails, AccordionSummary, CardActionArea, Grid } from '@material-ui/core';
import { map } from 'lodash';
import InViewList from './InViewList'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export default function PlayerCard({ character, targets }) {
  const stats = useStatSheet(character.stats)
  const classes = useStyles();
  const { gil, name, level, exp, hp, maxHp, mp, maxMp } = character
  if (!character.name) return null
  return (
    <Card className={classes.root}>
      <CardContent style={{ textAlign: 'center' }}>
        <Typography fontSize={24} color="textSecondary" gutterBottom>
          {name} - Level {level}
        </Typography>
        <Accordion>
          <AccordionSummary>
            <Typography align="center">Character Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={14} color="textSecondary" gutterBottom>
              HP: {hp}/{maxHp}
              <span style={{ marginLeft: '5px' }}> MP: {mp}/{maxMp}</span>
            </Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography fontSize={14} color="textSecondary" gutterBottom>
              Experience: {exp}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography fontSize={14} color="textSecondary" gutterBottom>
              {gil} Gil
        </Typography>
          </AccordionDetails>


        </Accordion>
        <Accordion>
          <AccordionSummary >
            <Typography align="center">Stats</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {map(Object.keys(stats), (abbr, i) => {
                const stat = stats[abbr]
                let statMessage = `${stat.label.toUpperCase()}: ${stat.points}`
                if (stat.statBoost > 0) {
                  statMessage = statMessage + ` +${stat.statBoost}`
                }
                return (<Grid key={i} item xs={6}><Typography>{statMessage}</Typography></Grid>)
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Grid container>
          {targets && <InViewList targets={targets} />}
        </Grid>

      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

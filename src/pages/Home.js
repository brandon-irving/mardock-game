import React from 'react'
// Components
import GridContainer from '../common/material/Grid/GridContainer'
import GridItem from '../common/material/Grid/GridItem'
// import Card from '../common/material/Card/Card'
// import CardHeader from '../common/material/Card/CardHeader'
import CardIcon from '../common/material/Card/CardIcon'
import CardFooter from '../common/material/Card/CardFooter'
import styles from "../common/material/dashboardStyle";
// Icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";

import { makeStyles } from "@material-ui/core/styles";
import InfoCard from '../common/InfoCard'
import HpBar from '../common/ProgressBar/HpBar'
import MpBar from '../common/ProgressBar/MpBar'
import { Card, CardContent, CardHeader, Avatar, Divider, Grid, Typography } from '@material-ui/core'
import InfoCard2 from '../common/InfoCard2'
import {statSheet} from '../gameData/constants'
import { map } from 'lodash'
import equipped from '../images/equipped.svg'
import shield from '../images/shield.svg'
import CustomIcon from '../common/CustomIcon'
import { useStatSheet } from '../common/hooks/useStatSheet'
import { useContextState } from 'dynamic-context-provider'
import { useEquipped } from '../common/hooks/useEquipped'
import { classes } from '../gameData/player/classes'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  }));

  const Home = () => {
    const { user: { character } } = useContextState() 
    const className = useStyles();
    const stats = useStatSheet()
    const equipped = useEquipped()
    const characterClass = classes[character.class]
    console.log('log: character', {characterClass, character})
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={3}>
                        <Avatar className={className.large}>BI</Avatar>
                        </Grid>
                        <Grid style={{textAlign: 'end'}} item xs={9}>
                        <Typography>Rank Title</Typography>                        
                        <Typography>100 Gil</Typography>                        
                        </Grid>
                        <Grid container style={{marginTop: '10px'}}>
                          {
                            map(equipped, equipment=>{
                              return(
                                <Grid item xs={4}>
                            <CustomIcon text={equipment.title} logo={equipment.src} alt={equipment.src}/>
                            </Grid>
                              )
                            })
                          }
                        </Grid>
                    </Grid>
                    <Divider style={{color: 'white', marginTop: '10px', marginBottom: '10px'}}/>
                <div>
                <HpBar />
                <MpBar />
                    </div>
                </CardContent>
            </Card>
             <GridContainer>
                 <InfoCard2>
                     <Grid container>
                     {map(stats, (stat, i)=>{
                       let statMessage = `${stat.abbr.toUpperCase()}: ${stat.statCount}`
                       if(stat.statBoost > 0){
                        statMessage = statMessage + ` +${stat.statBoost}`
                       }
                        return(<Grid key={i} item xs={4}>{statMessage}</Grid>)
                    })}   
                     </Grid>
                                     
                     </InfoCard2>
             <InfoCard 
             title={characterClass.title}
             text={characterClass.description}
             imgSrc={characterClass.src}
             />
             <InfoCard />
      </GridContainer>
        </div>
    )
}

export default Home

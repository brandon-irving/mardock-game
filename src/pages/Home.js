import React from 'react'
import GridContainer from '../common/material/Grid/GridContainer'
import { makeStyles } from "@material-ui/core/styles";
import InfoCard from '../common/InfoCard'
import HpBar from '../common/ProgressBar/HpBar'
import MpBar from '../common/ProgressBar/MpBar'
import { Card, CardContent, Avatar, Divider, Grid, Typography } from '@material-ui/core'
import InfoCard2 from '../common/InfoCard2'
import { forEach, map } from 'lodash'
import CustomIcon from '../common/CustomIcon'
import { useStatSheet } from '../common/hooks/useStatSheet'
import { useContextState } from 'dynamic-context-provider'
import { useEquipped } from '../common/hooks/useEquipped'
import { classes } from '../gameData/player/classes'
import { titles } from '../gameData/player/titles'

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
function getInitials(fullName='John Doe'){
  const names = fullName.split(' ')
  const initialsArray = []
  forEach(names, name=>{
    initialsArray.push( name.charAt(0))
  })
 return initialsArray.join(' ')
}
  const Home = () => {
    const { user: { character } } = useContextState() 
    const className = useStyles();
    const stats = useStatSheet()
    const equipped = useEquipped()
    const characterTitle = titles[character.title]
    const characterClass = classes[character.class]
    
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={3}>
                        <Avatar className={className.large}>{getInitials(character.name)}</Avatar>
                        </Grid>
                        <Grid style={{textAlign: 'end'}} item xs={9}>
                        <Typography>{character.name}</Typography>                        
                        <Typography>Level: {character.level}</Typography>                        
                        <Typography>{character.exp} Exp</Typography>                        
                        <Typography>{character.gil} Gil</Typography>                        
                        </Grid>
                        <Grid container style={{marginTop: '10px'}}>
                          {
                            map(equipped, (equipment, index)=>{
                              if(!equipment)return null
                              return(
                                <Grid key={index} item xs={4}>
                            <CustomIcon text={equipment.label} logo={equipment.src} alt={equipment.src}/>
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
                     {map(Object.keys(stats), (abbr, i)=>{
                       const stat = stats[abbr]
                       let statMessage = `${abbr.toUpperCase()}: ${stat.points}`
                       if(stat.statBoost > 0){
                        statMessage = statMessage + ` +${stat.statBoost}`
                       }
                        return(<Grid key={i} item xs={4}>{statMessage}</Grid>)
                    })}   
                     </Grid>
                                     
                     </InfoCard2>
             <InfoCard 
             title={characterTitle.label}
             text={characterTitle.description}
             imgSrc={characterTitle.src}
             />
               <InfoCard 
             title={characterClass.label}
             text={characterClass.description}
             imgSrc={characterClass.src}
             />
      </GridContainer>
        </div>
    )
}

export default Home

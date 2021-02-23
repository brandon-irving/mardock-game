import React from 'react'
// Components
import GridItem from '../common/material/Grid/GridItem'
import Card from '../common/material/Card/Card'
import CardHeader from '../common/material/Card/CardHeader'
import CardIcon from '../common/material/Card/CardIcon'
import CardFooter from '../common/material/Card/CardFooter'
import styles from "../common/material/dashboardStyle";
// Icons
import Store from "@material-ui/icons/Store";

import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from './ImageIcon'
import HpBar from './ProgressBar/HpBar'
import { Typography } from '@material-ui/core'
const useStyles = makeStyles(styles);

const InfoCard = ({ 
    title='Knight', 
    text="The knight is a real nigga",
    topText="",
    imgSrc="",
    noBox=false,
}) => {
    const classes = useStyles();
    
    return (
        <GridItem xs={12} sm={6} md={4}>
        <Card>
          {!noBox && 
          <div style={{display: 'flex', justifyContent: 'center'}}>  
            <CardIcon color="rose">
            <ImageIcon alt={title} src={imgSrc} />
            </CardIcon>
          </div>}
          <p style={{color: 'white', fontSize: '15pt', textAlign: 'center'}} className={classes.cardCategory}>{title}</p>
          <Typography variant="subtitle1" style={{color: 'white', textAlign: 'center'}} variant="subtitle1">{topText}</Typography>
          <CardFooter stats>
          <Typography style={{color: 'white', textAlign: 'center'}} variant="subtitle1">{text}</Typography>
          </CardFooter>
        </Card>
      </GridItem>
    )
}

export default InfoCard

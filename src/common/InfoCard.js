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
const useStyles = makeStyles(styles);

const InfoCard = ({ 
    title='Young Knight', 
    text='Gil: 200\n Exp:35',
    footer={icon: <div />, text: 'Footer'},
    noBox=false,
}) => {
    const classes = useStyles();

    return (
        <GridItem xs={12} sm={6} md={4}>
        <Card>
          {!noBox && <CardHeader color="success" stats icon>  
            <CardIcon color="rose">
            <ImageIcon />
            </CardIcon>
            <p style={{color: 'white'}} className={classes.cardCategory}>{title}</p>
            <h3 style={{color: 'white'}} className={classes.cardTitle}>{text}</h3>
          </CardHeader>}
          <CardFooter stats>
            <div style={{color: 'white'}} className={classes.stats}>
              {footer.icon}
              {footer.text}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    )
}

export default InfoCard

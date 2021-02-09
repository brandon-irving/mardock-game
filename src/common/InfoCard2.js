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

const InfoCard2 = ({ 
children
}) => {
    const classes = useStyles();
    
    return (
        <GridItem xs={12} sm={6} md={4}>
        <Card>
            <div style={{color: 'white', margin: '10px',display: 'flex', flexWrap: 'wrap'}}>
            {children}
            </div>
        </Card>
      </GridItem>
    )
}

export default InfoCard2

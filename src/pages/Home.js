import React from 'react'
// Components
import GridContainer from '../common/material/Grid/GridContainer'
import GridItem from '../common/material/Grid/GridItem'
import Card from '../common/material/Card/Card'
import CardHeader from '../common/material/Card/CardHeader'
import CardIcon from '../common/material/Card/CardIcon'
import CardFooter from '../common/material/Card/CardFooter'
import styles from "../common/material/dashboardStyle";
// Icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";

import { makeStyles } from "@material-ui/core/styles";
import InfoCard from '../common/InfoCard'
const useStyles = makeStyles(styles);


const Home = () => {
    const classes = useStyles();

    return (
        <div>
             <GridContainer>
             <InfoCard />
             <InfoCard noBox />
             <InfoCard noBox/>
      </GridContainer>
        </div>
    )
}

export default Home

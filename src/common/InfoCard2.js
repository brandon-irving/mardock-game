import React from 'react'
import GridItem from '../common/material/Grid/GridItem'
import Card from '../common/material/Card/Card'
import { Typography } from '@material-ui/core'

const InfoCard2 = ({ 
children, title=""
}) => {
    
    return (
        <GridItem xs={12} sm={6} md={4}>
        <Card>
            <Typography style={{color: "white"}} align="center" variant="h6">{title}</Typography>
            <div style={{textAlign: 'center', color: 'white', margin: '10px',display: 'flex', flexWrap: 'wrap'}}>
            {children}
            </div>
        </Card>
      </GridItem>
    )
}

export default InfoCard2

import { Grid } from '@material-ui/core'
import React from 'react'

const CustomIcon = ({logo, alt, text=""}) => {
    const style={
        width: '100%',
        maxHeight: '55px'
    }
    const textStyle={
        display: 'flex',
        alignItems: 'center'
    }
    return (
        <Grid container>
            <Grid item xs={3}>
            <img style={style} src={logo} alt={alt} />       
            </Grid>
            <Grid item xs={9} style={textStyle}>
        {text}
            </Grid>
        </Grid>
    )
}

export default CustomIcon

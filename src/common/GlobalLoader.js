import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useContextState } from 'dynamic-context-provider'

import {

    CircularProgress,
    Backdrop
} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
const GlobalLoader = () => {
    const classes = useStyles()
    const { globalLoading } = useContextState()
    return (
        <Backdrop className={classes.backdrop} open={globalLoading} >
<CircularProgress color="inherit" />
</Backdrop>
    )
}

export default GlobalLoader

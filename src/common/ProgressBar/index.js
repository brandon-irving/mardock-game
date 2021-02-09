import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

  
const ProgressBar = ({progress = 100, color='green', backgroundColor="black"}) => {
    const BorderLinearProgress = withStyles((theme) => ({
        root: {
          height: 15,
          borderRadius: 10,
        },
        colorPrimary: {
          backgroundColor,
        },
        bar: {
          borderRadius: 5,
          backgroundColor: color,
        },
      }))(LinearProgress);
    return (
            <BorderLinearProgress variant="determinate" value={progress} />
    )
}

export default ProgressBar

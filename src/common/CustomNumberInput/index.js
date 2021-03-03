import React from 'react'
import { ButtonContainer, NumberField } from './styled'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SubtractIcon from '@material-ui/icons/Remove';
import { Typography } from '@material-ui/core';
import theme from '../../core/theme';

const CustomNumberInput = ({value=0, min=null, max=null, onChange}) => {
    const [stateValue, setstateValue] = React.useState(value)
    const [error, seterror] = React.useState(null)

    function handleClick(dir){
        setstateValue(prevValue=>{
            let newValue = prevValue
            if(dir === 'inc'){
                newValue = prevValue + 1
            }
            if(dir === 'dec'){
                newValue = prevValue - 1
            }
            onChange(newValue)
            return newValue
        })
    }
    function increase(){
        const isTooHigh = max!== null && value + 1 > max 
        if(isTooHigh){            
            const errorMessage = max === 5 ? 'Reached maximum' : 'Out of stat points'
            return seterror(errorMessage)
        }
        seterror(null)
        handleClick('inc')
    }
    function decrease(){
        const isTooLow = min!== null && value - 1 < min 
        if(isTooLow){
            return seterror('Reached minimum')
        }
        seterror(null)
        handleClick('dec')
    }

    return (
        <>
        <ButtonContainer>
            <IconButton onClick={decrease}>
                <SubtractIcon />
            </IconButton>
            <NumberField>
                {stateValue}
                </NumberField>
                <IconButton onClick={increase}>
                <AddIcon />
            </IconButton>
        </ButtonContainer>
        {error && <Typography style= {{color: `${theme.palette.error.dark}`}} variant="subtitle1">{error}</Typography>}
        </>
    )
}

export default CustomNumberInput

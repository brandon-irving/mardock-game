import { useContextState } from 'dynamic-context-provider'
import React from 'react'
import DialogButton from '../DialogButton'
import { FloatingButtonContainer } from './styled'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Bag from './Bag'
const FloatingButton = ({children}) => {
    const { user } = useContextState()
    const [open, setopen] = React.useState(false)

    function handleOpen(){
        setopen(true)
    }
    function handleClose(){
        setopen(false)
    }
   
    return (
        <>
<FloatingButtonContainer onClick={handleOpen}>
            {children}
        </FloatingButtonContainer>
        <Dialog fullWidth style={{bottom: '50vw'}} open={open} onClose={handleClose}>
        <DialogTitle id='Bag'>Bag</DialogTitle>
        <DialogContent>
         <Bag />
        </DialogContent>
      </Dialog>
       </>
    )
}

export default FloatingButton

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { omit } from 'lodash'
import React, { useState } from 'react'

const DialogButton = (props) => {
    const { dialog ={open: false, setopen: ()=>{}}, children, onClick=()=>null } = props
    const buttonProps = omit(props, ['dialog'])

    async function handleClick(){
        dialog.setopen(true)
        await onClick()
    }
    function handleClose(){
        dialog.setopen(false)
    }
    return (
        <>
    <Button {...buttonProps} onClick={handleClick}>{children}</Button>
     <Dialog fullWidth style={{bottom: '50vw'}} open={dialog.open} onClose={handleClose}>
        <DialogTitle id={dialog.title}>{dialog.title}</DialogTitle>
        <DialogContent>
         {dialog.content}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
    )
}

export default DialogButton

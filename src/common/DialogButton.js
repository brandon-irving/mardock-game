import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { omit } from 'lodash'
import React, { useState } from 'react'

const DialogButton = (props) => {
    const { dialog ={fullScreen: false, open: false, setopen: ()=>{}}, children, onClick=()=>null } = props
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
     <Dialog fullScreen={dialog.fullScreen} fullWidth style={{bottom: '50vw'}} open={dialog.open} onClose={handleClose}>
        <DialogTitle id={dialog.title}>{dialog.title}</DialogTitle>
        <DialogContent>
         {dialog.content}
        </DialogContent>
      </Dialog>
    </>
    )
}

export default DialogButton

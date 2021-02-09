import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import { omit } from 'lodash'
import React, { useState } from 'react'

const DialogButton = (props) => {
    const { dialog ={}, children, onClick=()=>null } = props
    const [openDialog, setopenDialog] = useState(false)
    const buttonProps = omit(props, ['dialog'])

    async function handleClick(){
        setopenDialog(true)
        await onClick()
    }
    function handleClose(){
        setopenDialog(false)
    }
    return (
        <>
    <Button {...buttonProps} onClick={handleClick}>{children}</Button>
    <Dialog open={openDialog} onClose={handleClose} >
    <DialogTitle id={dialog.title}>{dialog.title}</DialogTitle>
    <DialogContent>
    {dialog.content}
    ioeuniofnoifijo
    </DialogContent>
    </Dialog>
    </>
    )
}

export default DialogButton

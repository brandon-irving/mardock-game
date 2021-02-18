import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import HintForm from './HintForm'
import ItemForm from './ItemForm'
import UpdateCharacterForm from './UpdateCharacterForm'

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Hint' },
  { icon: <SaveIcon />, name: 'Item' },
  { icon: <PrintIcon />, name: 'Update Character' },
  { icon: <ShareIcon />, name: 'Characters' },
  { icon: <FavoriteIcon />, name: 'Like' },
];
// const misc = {Potion: {description: "Recover 10 hp",
// hp: 10,
// label: "Potion",
// mp: 0,
// quantity: 2,
// src: "/mardock-game/static/media/darkRiteArmor.9c40cf0e.svg",
// type: "misc"
// }}
// async function addItem(){
//   await updateItems(['Potion 2'])
// }
// const [updateItems] = useUpdateItems(users[0])

export default function QuickMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dialogType, setdialogType] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  function closeDialog(){
    setdialogType('')
  }

  const dialogContent = {
    Hint: <HintForm />,
    Item: <ItemForm />,
    'Update Character': <UpdateCharacterForm />,
    Characters: <div>Characters</div>,
  }
  return (
    <>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={'up'}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={()=>setdialogType(action.name)}
            />
          ))}
        </SpeedDial>
        <Dialog
        open={dialogContent[dialogType] !== undefined}
        onClose={closeDialog}
      >
        <DialogTitle id={dialogType}></DialogTitle>
        <DialogContent>
         {dialogContent[dialogType]}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
        </>
  );
}

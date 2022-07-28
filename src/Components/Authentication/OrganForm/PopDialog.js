import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({children}) {
  const stl = {
    backgroundColor : "green",
    color : "#fff",
    Outline : "none",
    Border : "none",
    fontSize : "15px",
    fontWeight : "bold"
  } 
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} style={stl}>
        Join_Organizaion
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {children}
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
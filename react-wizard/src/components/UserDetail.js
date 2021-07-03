import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

export class UserDetail extends Component {
    continue =e=>{
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const {values ,handleInput} = this.props;
        return (
          
        <MuiThemeProvider>
          
        <>
        
        <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle>Enter User Details</DialogTitle>
            
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleInput('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleInput('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            {(values.firstName && values.lastName) ? 
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button> :
            <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
            disabled
          >Continue</Button>}
            
            </Dialog>
        </>
      </MuiThemeProvider>
      )
    }
}

export default UserDetail

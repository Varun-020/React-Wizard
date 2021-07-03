import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

export class AddressDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleInput } = this.props;
        return (
        <MuiThemeProvider>
        <>
        
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
              <DialogTitle>Enter Address Details</DialogTitle>
            
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleInput('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter YourPIN"
              label="PIN"
              onChange={handleInput('pin')}
              defaultValue={values.pin}
              margin="normal"
              fullWidth
            />
            
            {
                values.city && values.pin ? 
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
            >Continue</Button>
            }
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
        )
    }
}

export default AddressDetail

import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

export class OccupationDetail extends Component {
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
            <DialogTitle >Enter Occupation Details</DialogTitle>
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleInput('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Designation"
              label="Designation"
              onChange={handleInput('designation')}
              defaultValue={values.designation}
              margin="normal"
              fullWidth
            />
            <br />
            
            {
              values.occupation && values.designation ? 
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

export default OccupationDetail

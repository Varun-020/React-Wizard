import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {firstName,lastName,email,occupation,designation,city,pin} = this.props.values;
        return (
            <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle>Confirm User Data</DialogTitle> 
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="designation" secondary={designation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="city" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="pin" secondary={pin} />
              </ListItem>
            </List>
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
            
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

export default Confirm

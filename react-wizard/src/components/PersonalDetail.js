import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

export class PersonalDetail extends Component {
    continue = e => {
        e.preventDefault();

        // if(!this.values.email){
        //     console.log("fill this")
        // }
        // else{
        //     this.props.nextStep();
        // }
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
                    <DialogTitle>Enter Personal Details</DialogTitle>
                    <TextField
                        placeholder="Enter Your Email"
                        label="Email"
                        onChange={handleInput('email')}
                        defaultValue={values.email}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    
                    {
                    values.email? <Button color="primary" variant="contained"
                    onClick={this.continue}>Continue</Button> : 
                    <Button color="primary" variant="contained"
                    onClick={this.continue} disabled>Continue</Button> 
                    }
                    <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                    >
                    Back</Button>
                    </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}

export default PersonalDetail

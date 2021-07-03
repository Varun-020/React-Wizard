import React, { Component } from 'react'
import UserDetail from './UserDetail';
import PersonalDetail from './PersonalDetail';
import OccupationDetail from './OccupationDetail';
import AddressDetail from './AddressDetail';
import Confirm from './Confirm';
import Success from './Success';


export class Form extends Component {
    state = {
        step:1,
        firstName:"",
        lastName:"",
        email:"",
        occupation:"",
        designation:"",
        city:"",
        pin:""
    }
    //next step
    nextStep =()=>{
        const {step} = this.state;
        this.setState({
            step:step + 1
        });
    };
    //previous step
    prevStep =()=>{
        const {step} = this.state;
        this.setState({
            step:step - 1
        });
    };
    handleInput = input =>e=>{
        this.setState({[input]:e.target.value});
    };
    render() {
        const {step} = this.state;
        const {firstName,lastName,email,occupation,designation,city,pin} = this.state;
        const values ={firstName,lastName,email,occupation,designation,city,pin};
        switch(step){
            case 1:
                return (
                    <UserDetail 
                        nextStep={this.nextStep}
                        handleInput={this.handleInput}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PersonalDetail 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleInput={this.handleInput}
                        values={values}
                    />
                );
            case 3:
                return (
                    <OccupationDetail 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleInput={this.handleInput}
                        values={values}
                    />
                );
            case 4:
                return (
                    <AddressDetail 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleInput={this.handleInput}
                        values={values}
                    />
                );
            case 5:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 6:
                return (
                    <Success />
                );
            default:
                (console.log('React Wizard'))
        }
    }
}

export default Form

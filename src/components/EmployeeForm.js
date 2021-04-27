import React from 'react';

export default class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailIdChange = this.onEmailIdChange.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',            
            error: ''
        };
    }

    onFirstNameChange(e) {
        const firstName = e.target.value;
        this.setState((state) => ({ ...state, firstName: firstName }));
    }

    onLastNameChange(e) {
        const lastName = e.target.value;
        this.setState((state) => ({ ...state, lastName: lastName }));
    }

    onEmailIdChange(e) {
        const emailId = e.target.value;
        this.setState((state) => ({ ...state, emailId: emailId }));
    }
   

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.firstName || !this.state.lastName || !this.state.emailId  ) {
            this.setState((state) => ({ ...state, error: "Please input all the required values " }));
        } else {
            this.setState((state) => ({ ...state, error: '' }));
            this.props.onSubmitEmployee(
                {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    emailId: this.state.emailId
                    
                }
            );
        }
    }

    render() {
        return (
            <div> 
                <form onSubmit={this.onSubmit} className="form-group m-4">           
                    <input className="form-control m-1 w-50" required type="text" placeholder="Enter firstName here..." value={this.state.firstName} onChange={this.onFirstNameChange}/>
                    <input className="form-control m-1 w-25" required type="text" placeholder="Enter last name here..."  value={this.state.lastName} onChange={this.onLastNameChange}/>
                    <input className="form-control m-1 w-50"  required type="text"  placeholder="Enter Email-Id here..." value={this.state.emailId} onChange={this.onEmailIdChange}/>
                    
                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}
                    <button className="btn btn-primary m-1 w-25">Edit Employee</button>
                </form>
            </div>
        );
    }
}
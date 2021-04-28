import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
         //   id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
      //  this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
           return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });
        }        
    }
    
    
    
    changeFirstNameHandler= (event) => {
       // alert("fName"+event.target.value)
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
      //  alert("lName"+event.target.value)
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
      //  alert("email"+event.target.value)
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.handleCancel();
       // this.props.history.push('/employees');
    }
    onSubmit(e) {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        if (!this.state.firstName || !this.state.lastName ) {
            this.setState((state) => ({ ...state, error: 'Please set firstname & lastName!' }));
        } else {
            this.setState((state) => ({  ...state,error: '' }));
            this.props.onSubmitEmployee(
                
                {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    emailId : this.state.emailId
                    
                },
                
            );
           // 
        }
        
    }

    getTitle(){
        
            return <h3 className="text-center">Add Employee</h3>
        
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form onSubmit={this.onSubmit} className='add-employee-form' >
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" required className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" required className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" required className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}
                                        <button className="btn btn-success" onClick={this.onSubmit} style={{marginLeft: "10px"}}>Add</button>
                                      {/**  <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>UpdateNSave</button> */}
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddEmployeeComponent


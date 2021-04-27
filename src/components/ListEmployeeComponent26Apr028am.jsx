import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeEmployee } from '../actions/actions';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";
import ContainedButtons from './ContainedButtons';
import CustomizedTables from './CustomizedTables';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
{/*const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);*/}
  const styles = theme => ({
    root: {
      width: '80%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 500,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            flag:false
    }
       this.addEmployee = this.addEmployee.bind(this);
       this.editEmployee = this.editEmployee.bind(this);
       this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
       this.props.dispatch(removeEmployee(id))
    }
    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }
        
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    edit1Employee(id){
     alert("hi")
     // this.props.history.push(`/employees`);
    }
    editEmployee(id){
        //  this.props.dispatch(editEmployee(id))
        alert(id);
        console.log(id);
        this.setState({flag:true});
       // if(this.state.flag===true)
        this.props.history.push(`/add-employee/${id}`);
    }
    componentDidMount(){
     this.setState({employees:this.props.employees})  
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                 <Button color="primary" onClick={this.addEmployee}> Add Employee</Button>
                 </div>
                 <br></br>
                 
                        <CustomizedTables clickHandler={this.edit1Employee}>

                        </CustomizedTables>
                        <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                            {/**  <td><ContainedButtons/></td>*/}
                                             <td>
                                              {/*  <NavLink to='/edit' activeClassName='activeNav'>Edit Employee</NavLink> */ }
                                                 
                                              <Button color="primary" variant="contained" onClick={ () => 
                                                this.editEmployee(employee.id)} className="btn btn-info">Update </Button> <tab></tab>
                                              <Button color="primary" variant="contained" onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </Button>
                                               {/*  <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>*/}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

//export default ListEmployeeComponent

const mapStateToProps = (state) => {
    return {
        employees: state
    };
}
const matchDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      edit: () => dispatch({ type: 'EDIT_FIRST_EMPLOYEE' })
      
    }
  }


//export default connect(mapStateToProps)(ListEmployeeComponent);
export default withRouter(connect(mapStateToProps)(ListEmployeeComponent));
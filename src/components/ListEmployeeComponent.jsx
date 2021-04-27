import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeEmployee } from '../actions/actions';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";
import ContainedButtons from './ContainedButtons';
import CustomizedTables from './CustomizedTables';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
{/*const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const classes = useStyles();*/}
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
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
       // this.props.history.push('/add-employee/_add');
        this.props.history.push('/addemp');
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
                 <h2 align="center" className="text-center">Employees List</h2>
                 <div className = "row">
                 <Button variant="contained" color="primary" onClick={this.addEmployee} className="btn btn-info"> Add Employee</Button>
                 </div>
                 <br></br>
                 
                        {/*<CustomizedTables clickHandler={this.edit1Employee}>

                        </CustomizedTables>*/}
                       <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Employee First Name</StyledTableCell>
            <StyledTableCell align="right">Employee Last Name</StyledTableCell>
            <StyledTableCell align="right">Employee Email ID</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {this.props.employees.map((employee) => (
            <StyledTableRow key={employee.id}>
             
              <StyledTableCell align="right">{employee.firstName}</StyledTableCell>
              <StyledTableCell align="right">{employee.lastName}</StyledTableCell>
              <StyledTableCell align="right">{employee.emailId}</StyledTableCell>
             {/**  <StyledTableCell align="right"> <Button color="primary" variant="contained" onDoubleClick={ props.clickHandler(employee.id)} className="btn btn-info">Update </Button></StyledTableCell>
              <StyledTableCell align="right"><Button color="primary" variant="contained" onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </Button></StyledTableCell>*/}
              <StyledTableCell align="right">   <Button color="primary" variant="contained" onClick={ () => 
                                                this.editEmployee(employee.id)} className="btn btn-info">Update </Button></StyledTableCell> 
              <StyledTableCell align="right"><Button color="primary" variant="contained" onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </Button></StyledTableCell>                                 
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                      
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
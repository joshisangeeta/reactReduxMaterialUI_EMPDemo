import { React ,  useState } from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";
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

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function CustomizedTables(props) {
  const classes = useStyles();
  const [employees,setEmployees] = useState([]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
           {/*  <StyledTableCell>Dessert (100g serving)</StyledTableCell>*/}
            <StyledTableCell align="right">Employee First Name</StyledTableCell>
            <StyledTableCell align="right">Employee Last Name</StyledTableCell>
            <StyledTableCell align="right">Employee Email ID</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {props.employees.map((employee) => (
            <StyledTableRow key={employee.id}>
             
              <StyledTableCell align="right">{employee.firstName}</StyledTableCell>
              <StyledTableCell align="right">{employee.lastName}</StyledTableCell>
              <StyledTableCell align="right">{employee.emailId}</StyledTableCell>
              <StyledTableCell align="right"> <Button color="primary" variant="contained" onDoubleClick={ props.clickHandler(employee.id)} className="btn btn-info">Update </Button></StyledTableCell>
              <StyledTableCell align="right"><Button color="primary" variant="contained" onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </Button></StyledTableCell>
              
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => {
    return {
        employees: state
    };
}
export default connect(mapStateToProps)(CustomizedTables);

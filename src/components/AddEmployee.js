import React from 'react';
import AddEmployeeComponent from './AddEmployeeComponent';
import { connect } from 'react-redux';
import { addEmployee } from '../actions/actions';

const AddEmployee = (props) => (
    <div>
        <h3>Set Employee information:</h3>
        <AddEmployeeComponent employee={props.employee}
            onSubmitEmployee={(employee) => {
                console.log("hi "+employee.firstName+employee.lastName+employee.emailId)
                props.dispatch(addEmployee(employee));
                props.history.push('/');
            }}
        />
    </div>
);
//export default connect()(AddEmployee);

const mapStateToProps = (state,props) => {
    return {
                    employee:state
    };
};

export default connect(mapStateToProps)(AddEmployee);


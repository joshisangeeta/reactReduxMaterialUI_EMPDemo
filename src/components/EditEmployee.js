import React from 'react';
//import BookForm from './BookForm';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
//import { editBook } from '../actions/books';
import { editEmployee } from '../actions/actions';

const EditEmployee = (props) => (
    <div className='container__box'>
        <EmployeeForm
            employee={props.employee}
            onSubmitEmployee={(employee) => {
                props.dispatch(editEmployee(props.employee.id, employee));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        employee: state.find((employee) =>
            employee.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditEmployee);
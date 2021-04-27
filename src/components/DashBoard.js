import React from 'react';
import {getEmployees} from '../actions/actions';
import ListEmployeeComponent from './ListEmployeeComponent';
import {connect} from 'react-redux';

const DashBoard = (props) =>{
    props.fetchEmployees();
    return(
    <div className='container__list'>
        
        <ListEmployeeComponent />
    </div>
);}

const mapDispatchToStore = (dispatch) => {
    return {
        fetchEmployees: () => dispatch(getEmployees())
    }
}

export default connect(null,mapDispatchToStore)(DashBoard);

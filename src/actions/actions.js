import axios from '../axios/axios';

const _addEmployee = (employee) => ({
    type: 'ADD_EMPLOYEE',
    employee
});


export const addEmployee = (employeeData = {
    firstName: '',
    lastName: '',
    emailId:''
  
}) => {
    return (dispatch) => {
        console.log("in add emp action empdata"+employeeData.emailId)
        const employee = {
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            emailId:employeeData.emailId
        };
        console.log("emp dispatch"+employee.lastName)
        return axios.post('employees', employee).then(result => {
            dispatch(_addEmployee(result.data));
        });
    };
};

const _editEmployee = (id, updates) => ({
    type: 'EDIT_EMPLOYEE',
    id,
    updates
});

export const editEmployee = (id, updates) => {
    return (dispatch) => {
        return axios.put(`employees/${id}`, updates).then(() => {
            dispatch(_editEmployee(id, updates));
        });
    }
};









//return axios.post(EMPLOYEE_API_BASE_URL, employee);

const _removeEmployee = ({ id } = {}) => ({
    type: 'REMOVE_EMPLOYEE',
    id
});

export const removeEmployee = (id) => {
    console.log("id"+id);
    return (dispatch) => {
        return axios.delete(`employees/${id}`).then(() => {
            dispatch(_removeEmployee({ id }));
        })
    }
};





const _getEmployees = (employees) => ({
    type: 'GET_EMPLOYEEs',
    employees
});

export const getEmployees = () => {
    return (dispatch) => {
        return axios.get('employees').then(result => {
            const employees = [];

            result.data.forEach(item => {
                employees.push(item);
            });

            dispatch(_getEmployees(employees));
        });
    };
};
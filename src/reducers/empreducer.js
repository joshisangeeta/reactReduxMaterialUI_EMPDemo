const employeesReducerDefaultState = [];

export default (state = employeesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return [
                ...state,
                action.employee
            ];
        
     case 'REMOVE_EMPLOYEE':
            return state.filter(({ id }) => id !== action.id);
        
     case 'EDIT_FIRST_EMPLOYEE':
             return state.map((employee)=>employee.id === action.id ? {...employee,editing:!employee.editing}:employee)
    
    case 'EDIT_EMPLOYEE':
            return state.map((employee) => {
                alert("hi")
                if (employee.id === action.id) {
                    return {
                        ...employee,
                        ...action.updates
                    };
                } else {
                    return employee;
                }
            });
 
            


        case 'GET_EMPLOYEEs':
            return action.employees;
        default:
            return state;
    }
};
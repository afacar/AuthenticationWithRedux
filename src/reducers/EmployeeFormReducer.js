import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATED} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone:'',
    shift:''
};

export default (state = INITIAL_STATE, action) => {
    //console.log("WE ARE IN EmployeeFormReducer!");
    switch (action.type){        
        case EMPLOYEE_UPDATE:
        // [action.payload.prop] is Not Array. is Key Interpolation!!!
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATED:
            return INITIAL_STATE;
        default:
            return state;
    }
};
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
        EMPLOYEE_UPDATE, 
        EMPLOYEE_CREATED,
        EMPLOYEES_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};


export const employeeCreate = ({name, phone, shift}) => {
    // console.log("employeeCreate: ",name, phone, shift);
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employee`)
        .push({name,phone,shift})
        // Actions.employeeList({type:reset}) can be replaced with Actions.pop() 
        // in order to navigate previous scene
        .then(() => {
            dispatch({type: EMPLOYEE_CREATED});
            Actions.pop();
        });    
    };
};

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employee`)
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employee/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            // Clean the EmployeeReducerForm
            dispatch({type: EMPLOYEE_CREATED});
            // return to previous screen
            Actions.pop();

        });
    };

};


export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`)
        .remove()
        .then(() => {
            Actions.pop();
        });
    };
};
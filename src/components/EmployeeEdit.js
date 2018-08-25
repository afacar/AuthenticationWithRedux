import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardItem, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            // For each (value, prop) pair in employee object
            // this call employeeUpdate() action
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift, uid } = this.props;
        this.props.employeeSave({ name, phone, shift, uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}!`);
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid })
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Save Changes
                    </Button>
                </CardItem>
                <CardItem>
                    <Button onPress={ this.onTextPress.bind(this) }>
                        Text Schedule
                    </Button>
                </CardItem>
                <CardItem>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal})} >
                        Fire Employee
                    </Button>
                </CardItem>
                <Confirm 
                    visible={ this.state.showModal } 
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}    
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    // We also include uid to use above in 
    // employeeSave action
    const { name, phone, shift, uid } = state.employeeForm;
    return { name, phone, shift, uid };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
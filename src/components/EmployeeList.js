import React, { Component } from 'react';
import { View, Text, ListView} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        // nextProps are the next set of props that this component
        // will be renderd with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }){
        const datasource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2 
        });
        this.dataSource = datasource.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee} />;
    }

    render() {
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow} />
        );
    }
}

const mapStateToPtops = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });
    return {employees};
};

export default connect(mapStateToPtops, {employeesFetch})(EmployeeList);
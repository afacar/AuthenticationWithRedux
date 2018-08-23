import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle} >
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aaf',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aaf',
        marginLeft: 5,
        marginRight: 5
    }
});

export { Button };

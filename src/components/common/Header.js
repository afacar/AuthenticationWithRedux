// import libraries, another comment

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}); 

export { Header };

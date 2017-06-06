//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {StackNavigator} from 'react-navigation'

// create a component
class Tab2 extends Component {

    static navigationOptions={
        headerTitle:'T2',
    }

    render() {
        const{navigate}=this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Tab2</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Tab2;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,
    TouchableHighlight,
    
 } from 'react-native';


import {StackNavigator} from 'react-navigation'

// create a component
class Launch extends Component {

    static navigationOptions={
        header:null,
    };

    render() {
        const {navigate}=this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={
                    ()=>navigate('Home')
                }>
                    <Text>Launch 开始</Text>
                </TouchableHighlight>
                
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
export default Launch;

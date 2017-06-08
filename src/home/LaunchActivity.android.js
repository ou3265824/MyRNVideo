//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,
    TouchableHighlight,
    TextInput,
    Image,
    ToastAndroid,
 } from 'react-native';



import NetUtils from '../utils/NetUtils';

import {StackNavigator} from 'react-navigation'

// create a component
class Launch extends Component {

    constructor(props){
        super(props);
        this.state={
            userName:'',
            pass:'',
        };
    }

    login(){
        NetUtils.getUser(this.state.userName,this.state.pass,function (set) {
            ToastAndroid.show(JSON.stringify(set),ToastAndroid.SHORT)
        })
    }

    static navigationOptions={
        header:null,
    };

    render() {
        const {navigate}=this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source={require('../images/refresh_failed.png')} />
                <View>
                    <Text>a</Text>
                    <TextInput placeholder={'开始'}
                        style={{height: 40, width:'40%', borderColor: 'gray', padding: 0,borderWidth: 1}}
                               onChangeText={(userName)=>this.setState({userName})} value={this.state.userName}/>
                </View>
                <View>
                    <Text>b</Text>
                    <TextInput placeholder={'结束'} onChangeText={(pass)=>this.setState({pass})} value={this.state.pass}/>
                </View>
                <TouchableHighlight onPress={
                    // ()=>navigate('Home')
                    ()=>{
                        this.login()
                        // ToastAndroid.show(this.state.userName+'---'+this.state.pass,ToastAndroid.LONG);
                    }
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

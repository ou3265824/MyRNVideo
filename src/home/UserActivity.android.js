//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {DrawerNavigator} from 'react-navigation';


// create a component
class User extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>User</Text>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DrawerNav;

const DrawerNav = DrawerNavigator({
    
    User: { screen: User },
    
}, {
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
      initialRouteName: Home, // 默认页面组件
      activeTintColor: 'white',  // 选中文字颜色
      activeBackgroundColor: '#ff8500', // 选中背景颜色
      inactiveTintColor: '#666',  // 未选中文字颜色
      inactiveBackgroundColor: '#fff', // 未选中背景颜色
      style: {  // 样式

      }
    }
});
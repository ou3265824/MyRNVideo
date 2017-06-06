//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

import Tab1 from './Tab1';
import Tab2 from './Tab2';

import {StackNavigator,TabNavigator} from 'react-navigation';

const HomeActivity =TabNavigator({
    tab1:{
        screen:Tab1,
        navigationOpens:{
            tabBar:{
                label:'第二个',
                icon:({tintColor})=>(
                    <Image source={require('../image/refresh_failed.png')} style={[{tintColor: tintColor},styles.icon]}></Image>
                    
                ),
            },
            
        }
    },tab2:{
        screen:Tab2,
            navigationOpens:{
                    tabBar:{
                    label:'第二个',
                    icon:({tintColor})=>(
                        <Image source={require('../image/refresh_succeed.png')} style={[{tintColor: tintColor},styles.icon]}></Image>
                    ),
                },
               
                
            },
            
        },

},{
     tabBarPosition:'bottom',// 显示在底端，android 默认是显示在页面顶端的
    //  swipeEnabled:'false',//禁止左右滑动
    // animationEnabled:'true',//切换页面时不显示动画
     backBehavior:'none',// 按 back 键是否跳转到第一个 Tab， none 为不跳转
     tabBarOptions:{
        //  activeTintColor:'#0f9c00', // 文字和图片选中颜色
        // inactiveTintColor:'#999',// 文字和图片默认颜色
        showIcon:true,// android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle:{height:0},// android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        
         style:{
            // backgroundColor:'#fff',// TabBar 背景色
        },
        labelStyle:{
            fontSize:12,// 文字大小
        },
     }



});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});
//make this component available to the app
export default HomeActivity;

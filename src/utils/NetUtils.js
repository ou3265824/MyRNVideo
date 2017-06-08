//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const appid='034ddf7a49a4fdd1146c23d162994260';
const apikeyvalue='3d82db4d622b044cb19b4f287a72431b';
const appidkey='X-Bmob-Application-Id';
const apikey='X-Bmob-REST-API-Key';

const url='https://api.bmob.cn/1/users';

// create a component
class NetManage extends Component {

    static getUser(username,password,callback){
        const user={
            "username":username,
            "password":password

        };
        this.post(url,user,callback);
    }


    static get(url,params,callback){
        if(params){
            let paramsArray=[];
            Object.keys(params).forEach(key=>paramsArray.push(key+'='+params[key]))
            if(url.search(/\?/)===-1){
                url+='?'+paramsArray.join("&");
            }else{
                url+="&"+paramsArray.join("&");
            }

        }

        // fetch(url,{
        //     method:'get',
        // }).then((response)=>{
        //     response.text()
        // }).then((responseJSON)=>{
        //     callback(JSON.parse(responseJSON))
        // }).done();

        fetch(url,{
            method: 'GET',
        }).then((response) => {
            // callback(JSON.parse(response))
            callback(response)
        }).done();
    }

    /**
     * POST \
     -H "X-Bmob-Application-Id: Your Application ID" \
     -H "X-Bmob-REST-API-Key: Your REST API Key" \
     -H "Content-Type: application/json" \
     -d '{"score":1337,"playerName":"Sean Plott","cheatMode":false}' \
     * @param url
     * @param params
     * @param headers
     * @param callback
     */
    static post(url,params,callback){

        fetch(url,{
            method:'post',
            headers:{
                'X-Bmob-Application-Id': appid,
                'X-Bmob-REST-API-Key':apikeyvalue,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(params),
        }).then((response)=>{
            response.json()
        }).then((responseJSON)=>{
            callback(responseJSON)
        }).done();
    }


}


//make this component available to the app
export default NetManage;

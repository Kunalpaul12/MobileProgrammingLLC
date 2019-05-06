import React ,{ Component } from 'react'
import {
    Dimensions,
    Platform
} from 'react-native'

let {width,height} = Dimensions.get('window')

ScreenWidth = width
ScreenHeight = height

var LoginScreen = {
    Logo:{
        width:ScreenWidth/2,
        height:ScreenHeight/4,
    },
    TextInput:{
        width:ScreenWidth,
        height:Platform.os == 'ios'? ScreenHeight/15 :ScreenHeight/14
    }

}
var SignUpPageIcons = {
    width:ScreenWidth/15,
    height:ScreenHeight/15,
    }

module.exports={
LoginScreen,
ScreenWidth,
ScreenHeight,
SignUpPageIcons
}
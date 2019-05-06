import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Modal,ImageBackground,Image,TextInput,TouchableOpacity,StatusBar,Alert} from 'react-native';
import Dimension from '../dimensions/dimension'
import AlertText from '../alert/alert'
////////////////// Keybord Aware View ////////////////
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
///////////////////////// Loding bar ////////////////////
import Spinner from 'react-native-spinkit'
import ScreenStyle from '../screen_style/screenStyle'

var LogInData ={
    mobile:'',/// doing this as a empty string not null because if the user put somethinbg and remove it then the null does not work
    password:'',
}

class Login extends Component{
    state = {
        loading:false,
        secureTextEntry:true
    }

    _login = () => {
        if(LogInData.mobile=='' || LogInData.password==''){
            Alert.alert(
                AlertText.login.incompleted_detail.header,
                AlertText.login.incompleted_detail.title,
                [{text: 'OK'}]
            )
            return
        }else{
            const {navigate} = this.props.navigation;
            navigate('SignUpScreen');
        }
    }

    render() {
      return (
        <View style = {Style.Background}>
          <StatusBar
            backgroundColor={ScreenStyle.Header.color}
            />
        <ImageBackground 
            style={{flex:1,width: Dimension.ScreenWidth, height: Dimension.ScreenHeight,}}
            imageStyle = {{width: null, height: null,resizeMode:'cover'}}
            source = {require('../assets/images/login/background.jpeg')}>

         <Modal
            transparent={true}
            animationType={'none'}
            visible={this.state.loading}
            onRequestClose={() => {console.log('close modal')}}>
            <View style={Style.modalBackground}>
            <View style={Style.activityIndicatorWrapper}>
            <Spinner isVisible={this.state.loading} size={75} type={global.loading_bar} color={"black"}/>
            </View>
            </View>
            </Modal>
            <KeyboardAwareScrollView>
            <View style ={Style.TopLogoView}>
            <Image source = {require('../assets/images/login/logo.png')} style = {Style.TopLogoImage}/>
            </View>
            {/* This is the TextInput field*/}
            <View style ={Style.TextInputContainer}>
            <View style ={{flexDirection:'row',alignItems:'center'}}>
            <TextInput
            style = {Style.TextInputView}
            onChangeText = {(text)=>{LogInData.mobile = text}}
            autoCorrect = {false}
            underlineColorAndroid='#E05B6A'  
            keyboardType = 'phone-pad'
            placeholder = 'Mobile Number'
            placeholderTextColor = 'white'
            />
            <TouchableOpacity
            style = {{marginTop:15,width:Dimension.ScreenWidth/10,height:Dimension.LoginScreen.TextInput.height/2}}
             onPress={() =>{}}>
            </TouchableOpacity>
            </View>
            <View style ={{flexDirection:'row',alignItems:'center'}}>
            <TextInput
            style = {Style.TextInputView}
            onChangeText = {(text)=>{LogInData.password = text}}
            autoCorrect = {false} 
            underlineColorAndroid='#E05B6A'  
            placeholder = 'Password'
            placeholderTextColor = 'white'
            secureTextEntry = {this.state.secureTextEntry}
            />
            <TouchableOpacity
            style = {{marginTop:15,width:Dimension.ScreenWidth/10,height:Dimension.LoginScreen.TextInput.height/2}}
             onPress={ () => this.setState({secureTextEntry:!this.state.secureTextEntry})}>
            <Image
              style={{width:Dimension.ScreenWidth/9,height:Dimension.LoginScreen.TextInput.height/1.7,resizeMode:'contain'}}
              source={ this.state.secureTextEntry == true ? require('../assets/images/login/hide.png') : require('../assets/images/login/unhide.png')}
            />
          </TouchableOpacity>
            </View>
           {/* This is the Button*/}
           <TouchableOpacity
            style={Style.button}
            onPress={this._login}>
            <Text style = {{alignItems:'center',color:'white',fontFamily: 'Roboto-Bold',fontSize:15,}}> Log In </Text>
            </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
    )}
    }
    export default Login
    const Style = StyleSheet.create({
        Background:{
            flex:1,
            backgroundColor:'white'
        },
        TopLogoView:{
            flex:0.4,
            alignItems:'center',
            marginTop:30
        },
        TopLogoImage:{
            width:Dimension.LoginScreen.Logo.width,
            height:Dimension.LoginScreen.Logo.height,
            resizeMode:'contain'
        },
        TextStyle:{
           fontFamily: 'Roboto-Bold',
           fontSize:15,
           textAlign: 'center',
           marginTop: 10,
           color:'white'
       },
        TextInputContainer:{
            flex:0.4,
            alignItems: 'center',
        },
        TextInputView:{
            width:Dimension.LoginScreen.TextInput.width/1.2,
            height:Dimension.LoginScreen.TextInput.height,
            //borderWidth: 1,
            borderBottomWidth: Platform.OS === 'ios' ? 1 :0,
            borderColor: '#E05B6A',
            borderRadius: 10,
            marginTop:15,
            color:'white',
            fontFamily: 'Roboto-Bold',
            fontSize:15,
        },
        button: {
           alignItems: 'center',
           justifyContent:'center',
           backgroundColor: '#E05B6A',
           borderRadius: 10,
           marginTop:20,
           width:Dimension.LoginScreen.TextInput.width/2,
           height:Dimension.LoginScreen.TextInput.height
         },
         activityIndicator: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           height: 80
        },
   
        activityIndicatorWrapper: {
           backgroundColor: '#FFFFFF',
           height: 100,
           width: 100,
           borderRadius: 10,
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-around'
         },
         modalBackground: {
           flex: 1,
           alignItems: 'center',
           flexDirection: 'column',
           justifyContent: 'space-around',
           backgroundColor: '#00000040'
         },
   
   
    })
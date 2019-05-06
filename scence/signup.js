import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,PixelRatio,Modal,ActivityIndicator,TouchableOpacity,Image,TextInput,Alert} from 'react-native';
import ScreenStyle from '../screen_style/screenStyle'
import Dimension from '../dimensions/dimension'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-picker'
import { Button } from 'react-native-elements'
import AlertText from '../alert/alert'

var UserDataSend = {
    display_picture:'notSelected',
    name:null,
    email:null,
    address:null,
    city:null,
    state:null,
    country:'India',
    phoneno:null
 
  }

class SignUp extends Component{
    state = {
        avatarSource:null,
        videoSource: null,
        UserName: null,
        UserEmailId: null,
        UserPhoneNo: null,
        loading:false,
        ImageData:null,
        phoneno:null,
        country:'India'
      };

      selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
             let source = { uri: response.uri };
         
            // You can also display the image using data:
             //let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
             UserDataSend.display_picture = response.uri
    
            this.setState({
              avatarSource: source,
              ImageData:response.data
            });
          }
        });
      }

      _onSubmit = () => {
          if(UserDataSend.name == null || UserDataSend.email == null){
            Alert.alert(
              'Alert',
              'Please provide your name and email',
              [
                  {text: 'OK', onPress: () => {}},
              ],
              { cancelable: false }
          )
          return
          }
            Alert.alert(
                AlertText.signUpSucessfully.title,
                AlertText.signUpSucessfully.message,
                [
                    {text: 'OK', onPress: () => {}},
                ],
                { cancelable: false }
            )
        }

    render() {
      return (
        <ImageBackground 
        style={{width: Dimension.ScreenWidth, height: Dimension.ScreenHeight, resizeMode: 'stretch',}}
        source={require('../assets/images/login/background.jpeg')}>
         <View style={styles.Container}>
         <Modal
                    transparent={true}
                    animationType={'none'}
                    visible={this.state.loading}
                    onRequestClose={() => {console.log('close modal')}}>
            <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
                    animating = {this.state.loading}
                    color = 'black'
                    size = "large"
                    style = {styles.activityIndicator}/>
            </View>
            </View>
            </Modal>

        <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid={true} keyboardShouldPersistTaps='handled'>

        {/* profile image*/}
        <View style={styles.ImageContainer}>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
              {this.state.avatarSource === null ? <Text style = {styles.HeaderText}>Select a Photo</Text> :
                <Image style={styles.avatar} source={this.state.avatarSource} />
              }
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.InformationView}>

        {/*Name*/}
        <View style={styles.InformationViewImage}>
            <Image
              style={{ resizeMode: 'contain', width: Dimension.SignUpPageIcons.width, height: Dimension.SignUpPageIcons.height }}
              source={require('../assets/images/signup/Name.png')}
             
            />
            <TextInput style={styles.InformationText}
              placeholder='Please enter your name ✸'
              placeholderTextColor = "white"
              autoCorrect={false}
              underlineColorAndroid='#E05B6A'  
              onChangeText={(text) => UserDataSend.name = text}
              selectionColor={'white'}
            />
          </View>


       {/* profile information email*/}


       <View style={styles.InformationViewImage}>
            <Image
              style={{ resizeMode: 'contain', width: Dimension.SignUpPageIcons.width, height: Dimension.SignUpPageIcons.height }}
              source={require('../assets/images/signup/Email.png')}
            />
            <TextInput style={styles.InformationText}
              placeholder='Please enter your email id ✸'
              placeholderTextColor = "white"
              autoCorrect={false}
              autoCapitalize = 'none'
              selectionColor={'white'}
              underlineColorAndroid='#E05B6A'  
              onChangeText={(text) => UserDataSend.email = text}
            />
          </View>

           {/* profile information phoneno*/}


           <View style={styles.InformationViewImage}>
            <Image
              style={{ resizeMode: 'contain', width: Dimension.SignUpPageIcons.width, height: Dimension.SignUpPageIcons.height }}
              source={require('../assets/images/signup/Phone1.png')}
            />
            <TextInput style={styles.InformationText}
            placeholder='Please enter your phone number'
            placeholderTextColor = 'white'
            autoCorrect={false}
            editable={false}
            autoCapitalize = 'none'
            underlineColorAndroid='#E05B6A'  
            onChangeText={(text) => UserDataSend.phoneno = text}
            selectionColor={'white'}
            defaultValue = {this.state.phoneno}
            />
          </View>


           {/* profile information address*/}

          <View style={styles.InformationViewImage}>
            <Image
              style={{ resizeMode: 'contain', width: Dimension.SignUpPageIcons.width, height: Dimension.SignUpPageIcons.height}}
              source={require('../assets/images/signup/notebook.png')}
            />
            <TextInput style={styles.InformationText}
              placeholder='Please enter your address'
              placeholderTextColor = "white"
              autoCorrect={false}
              selectionColor={'white'}
              underlineColorAndroid='#E05B6A'  
              onChangeText={(text) => UserDataSend.address = text}
            />
          </View>

           {/* profile information city*/}


           <View style={styles.InformationViewImage}>
            <Image
              style={{ resizeMode: 'contain', width: Dimension.SignUpPageIcons.width, height: Dimension.SignUpPageIcons.height }}
              source={require('../assets/images/signup/building.png')}
            />
            <TextInput style={styles.InformationText}
              placeholder='Please enter your city'
              placeholderTextColor = "white"
              autoCorrect={false}
              selectionColor={'white'}
              underlineColorAndroid='#E05B6A'  
              onChangeText={(text) => UserDataSend.city = text}
            />
          </View>


           {/* profile information state*/}

          <View style={styles.InformationViewImage}>
            <Image
              style={{ resizeMode: 'contain', width: Dimension.SignUpPageIcons.width, height: Dimension.SignUpPageIcons.height }}
              source={require('../assets/images/signup/state.png')}
            />
            <TextInput style={styles.InformationText}
              placeholder='Please enter your state'
              placeholderTextColor = "white"
              autoCorrect={false}
              selectionColor={'white'}
              underlineColorAndroid='#E05B6A'  
              onChangeText={(text) => UserDataSend.state = text}
            />
          </View>
        </View>
          {/* profile submit button*/}


          <View style={styles.SubmitButtonView}>
          <Button
            icon={{ name: 'done' }}
            buttonStyle={styles.SubmitButtonStyle}
            textStyle={{ textAlign: 'center' }}
            title={'Submit'}
            onPress={this._onSubmit}
          />

        </View>

        </KeyboardAwareScrollView>
       
         </View>
        </ImageBackground>
      );
    }
  }

  export default SignUp;

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      //backgroundColor: ScreenStyle.BackgroundColour
    },
  
    HeaderView: {
      flex: 0.1,
      alignItems: 'center',
      marginTop: 30,
    },
  
    HeaderText: {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor:'rgba(225,225,225,0)',
      fontFamily: 'Roboto-Regular',
    },
    ImageContainer: {
      flex: 0.25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      ///backgroundColor: '#3cb371'
    },
    avatarContainer: {
      borderColor: 'white',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center'
    },
    avatar: {
      borderRadius: 75,
      width: 150,
      height: 150
    },
    InformationView: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'flex-start',
      //borderWidth: 0.5,
      //borderColor: '#d6d7da',
      marginLeft: "5%"
    },
    InformationText: {
      margin: 15,
      borderColor: ScreenStyle.TextInpurBorderColor,
      borderBottomWidth: Platform.OS === 'ios' ? 1 :0,
      width: Dimension.ScreenWidth/1.2,
      height: Dimension.TextInputHeight,
      color:'white',
      fontFamily: 'Roboto-Regular'
  
  
    },
    InformationViewImage: {
      flexDirection: 'row',
      alignItems: 'center',
      width:Dimension.ScreenWidth,
    },
  
    SubmitButtonView: {
      alignItems: 'flex-end',
      flex: 0.1,
      marginBottom:100,
      marginRight: "5%"
    },
    SubmitButtonStyle: {
      backgroundColor: ScreenStyle.ButtonClickableColor,
      borderRadius: 10,
      width: Dimension.ButtonWidth,
      height: Dimension.ButtonHeight
    },
    contentContainer: {
      paddingVertical: 20
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
    textinput_focused: {
      color: 'white'
    },
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
  })
  
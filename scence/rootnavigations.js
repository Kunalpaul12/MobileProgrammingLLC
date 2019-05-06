import Login from './login'
import SignUp from './signup'
/////// Importing StackNaviagtion ///////////////////////////////
import { createStackNavigator, createAppContainer } from "react-navigation";
const StartUpRootNavigation = createStackNavigator({
    LoginScreen:{
        screen:Login,
        navigationOptions:{
            gesturesEnabled: false,
        }
    },
    SignUpScreen:{
        screen:SignUp,
        navigationOptions:{
            gesturesEnabled: false,
        }
    },
},{
    headerMode: 'none',
})

export default createAppContainer(StartUpRootNavigation);

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Splash";
import LogInScreen from "../screens/AuthScreens/LogIn";
import SignUpScreen from "../screens/AuthScreens/SignUp";
import ForgotPassword from "../screens/AuthScreens/forgotPassword";
import GlobalStyles from "../Styles/GlobalStyles";
import AppStack from "./homeNavigation";


const NavigationBox = () => {
    const NativeStack = createNativeStackNavigator();
    return(
            <NativeStack.Navigator screenOptions={{headerShown:false , statusBarColor:'#e86d2d'}}>
                <NativeStack.Screen  name="splash" component={ SplashScreen} />
                <NativeStack.Screen  name="logIn" component={ LogInScreen } />
                <NativeStack.Screen options={
                    {
                        headerShown:true,
                        headerTitle:'Reset Password',
                        headerTitleStyle: GlobalStyles.HeaderTitle,
                        headerStyle : GlobalStyles.headerStyle,
                        headerTintColor:'#fff'
                        
                    }
                } name="forgotPassword" component={ ForgotPassword }/>
                <NativeStack.Screen  name="signup" component={ SignUpScreen } />
                <NativeStack.Screen name="main" component={AppStack}/>
            </NativeStack.Navigator>
    )
}

export default NavigationBox;
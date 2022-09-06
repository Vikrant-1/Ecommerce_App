import React from "react";

import {  View } from 'react-native';
import GlobalStyles from "../Styles/GlobalStyles";
import  Icon  from "react-native-vector-icons/Fontisto";


const SplashScreen = ({navigation}) => {
    setTimeout(
        () => {
            navigation.navigate('logIn')
        },2000
    )

    return(
        <View style={[GlobalStyles.fullScreen ,GlobalStyles.centerAlignment]}>
            <Icon name="shopping-store" color={'#000'} size={150} />
        </View>
    )
}

export default SplashScreen;
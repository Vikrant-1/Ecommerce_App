import React from 'react';
import { 
    View,
    Text,
    

 } from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';

export function MyOrderScreen() {
    return(
        <View style={[GlobalStyles.fullScreen,GlobalStyles.centerAlignment]}>
            <Text>
            MyOrder Screen .....
            </Text>
        </View>
    )
    
}
import React from 'react';
import { View , Text} from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';


export default function MyCart(){
    return(
        <View style={[GlobalStyles.centerAlignment,GlobalStyles.fullScreen,{backgroundColor:'red'}]}>
            <Text style={GlobalStyles.FontStyle1}>
                This is my Cart . 
            </Text>
        </View>
    )
}


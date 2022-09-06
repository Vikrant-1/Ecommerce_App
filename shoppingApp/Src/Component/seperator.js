import React from "react";
import {
    View,
    Text,

} from 'react-native';
import GlobalStyles from "../Styles/GlobalStyles";



const Sperator =  (
    {
        width,
        height
    }
) => {
    return(
        <View style={{width:width , height:height}}>
        </View>
    )
}

export const OrSperator = () => {
    return(
        <View style = {GlobalStyles.SperatorView}>
            <View style={GlobalStyles.SperatorLine}></View>
            <Text style={{marginHorizontal:5,}}>
                OR
            </Text>
            <View style={GlobalStyles.SperatorLine}></View>
        </View>
    )
}


export default Sperator;
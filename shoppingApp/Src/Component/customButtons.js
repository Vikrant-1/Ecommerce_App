import React from "react";
import {
    View,
    Text,
    TouchableOpacity

} from 'react-native';

export const CustonButton1 = (
    {
        title,
        titleStyle,
        onPress,
        buttonStyle


    }

) => {
    return(
        <View>
            <TouchableOpacity style = {buttonStyle} onPress={ onPress }>
                <Text style={titleStyle}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
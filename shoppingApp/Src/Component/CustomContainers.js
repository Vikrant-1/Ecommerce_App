import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';


// Conatain borderRaduis 12 , and imange / text of product

export const CustomContainer_01 = ({item}) => {
    return (
        <TouchableOpacity style={GlobalStyles.CustomContainer1Style} onPress={() => {console.log('press the product')}}>
            <Image resizeMode='stretch' style={GlobalStyles.CustomContainer1_Image} source={{uri:item.url}}/>
            <Text>
               {item.title}
            </Text>
        </TouchableOpacity>
    )
}
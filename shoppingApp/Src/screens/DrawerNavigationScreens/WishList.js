import React from 'react';
import { Text, View } from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';

export default function MyWishList() {
    return(
        <View style={[GlobalStyles.fullScreen,GlobalStyles.centerAlignment]}>
            <Text>
               WishList Screen
            </Text>
        </View>

    )
} 

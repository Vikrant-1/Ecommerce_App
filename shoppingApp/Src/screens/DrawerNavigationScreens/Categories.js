import React from 'react';
import { 
    View,Text, FlatList
    
 } from 'react-native';
import CategoryCard, { CatData } from '../../Component/Categorycompo';
import GlobalStyles from '../../Styles/GlobalStyles';

export default function AllCategory() {
    return(
        <View style={[GlobalStyles.fullScreen,GlobalStyles.centerAlignment]}>
            <FlatList
            data={ CatData }
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem = {
                ({item}) => {
                    return(
                        <CategoryCard item={ item } key={item.id} />
                    )
                }
            }
            >

            </FlatList>
        </View>
    )
}

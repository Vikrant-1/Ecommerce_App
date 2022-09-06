import React from 'react';
import { Image, View,Text } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';

export const CatData = [
    {   
        id :'1',
        url: 'https://tse1.mm.bing.net/th?id=OIP.GiTTN8ytMbWpWGFq5yfc6AHaHa&pid=Api&P=0',
        title : 'Kids'
    },
    {   
        id :'2',
        url: 'https://tse3.mm.bing.net/th?id=OIP.rm1bS425SGbtSsmJeowTdAHaEK&pid=Api&P=0',
        title : 'Electronics'
    },
    {   
        id :'3',
        url: 'https://tse3.mm.bing.net/th?id=OIP.1uwaOgLNLfBvSPWWHSD8ZQHaFj&pid=Api&P=0',
        title : 'Home'
    },
    {   
        id :'4',
        url: 'https://tse2.mm.bing.net/th?id=OIP.6Ds_8M7uHSxCquMYooNv8wHaEK&pid=Api&P=0',
        title : 'Mobile'
    },
    {
        id : '5',
        url :'https://tse2.mm.bing.net/th?id=OIP.1ufkKpqxl3VkJ-SjQB6EkAHaJS&pid=Api&P=0',
        title :'Fashion'
    },

    {
        id:'6',
        url:'https://tse1.mm.bing.net/th?id=OIP.M56Z_XU7r_UeDFR05bfkzwHaE7&pid=Api&P=0',
        title :'Books'
    }
]

const CategoryCard = ({item}) => {
    
    return(
        <View style={[GlobalStyles.CategoryCardStyle,GlobalStyles.centerAlignment]}>
            <Image resizeMode={'center'} style={GlobalStyles.CategoryCardImage} 
            source={{ uri: item.url }}/>
            <View style={{height:1.3,backgroundColor:'#808080'}}></View>
            <Text style={{color:'#fff',fontSize:16}}>
                {item.title}
            </Text>
        </View>
    )
}

export default CategoryCard;
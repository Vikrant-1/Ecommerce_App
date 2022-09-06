import React, {  useContext, useEffect, useState } from "react";
import {  Alert, Button, Dimensions, FlatList, Image,  Text, TouchableOpacity, View } from 'react-native';
import GlobalStyles from "../../Styles/GlobalStyles";
import InputField from "../../Component/InputField";
import  Icon  from "react-native-vector-icons/AntDesign";
import { AuthContext } from "../../Navigation_S/AuthProvider";
import auth from "@react-native-firebase/auth";
import CustomAlert from '../../Component/customAlert';


const dummySwiperData = [
    {
        id :'1',
        url:'https://tse4.mm.bing.net/th?id=OIP.RoCscPNbH7yc1M4-rcibEAHaEK&pid=Api&P=0',
        
    },
    {
        id:'2',
        url:'https://tse1.mm.bing.net/th?id=OIP.oO7FiFEwmuyqS5_Dtgk1jQHaDp&pid=Api&P=0',
    },
    {
        id:'3',
        url:'https://tse3.mm.bing.net/th?id=OIP.Djl9dDHvSjh6ZxqUsOwJUAHaD4&pid=Api&P=0',

    },
    {
        id:'4',
        url:'https://tse4.mm.bing.net/th?id=OIP.ZeKjELRU7Fo6uA3R0-iK2AHaC0&pid=Api&P=0',

    },
    {
        id:'5',
        url:'https://tse4.mm.bing.net/th?id=OIP.h8gESjvSxUjsBISh_Z2uVwHaDC&pid=Api&P=0',
    },
    {
        id:'6',
        url :'https://tse1.mm.bing.net/th?id=OIP.9PrqPg28Y6WdxODqNlv9QgHaDs&pid=Api&P=0',
    },
    {
        id:'7',
        url:'https://tse4.mm.bing.net/th?id=OIP.5rWc5IQqfmYSlB1IqyyuJQHaC8&pid=Api&P=0',
    },
    {
        id:'8',
        url:'https://tse1.mm.bing.net/th?id=OIP.-gehHNW7TynuULgoEty_sgHaD8&pid=Api&P=0',
    }


]

const dummydata2 = [
    {
        id : '1',
        url : 'https://tse4.mm.bing.net/th?id=OIP.kLO81lzSw0l-nfYrpp6J6gHaHb&pid=Api&P=0',
        title:'Men T-Shirt',
    },
    {
        id : '2',
        url : 'https://tse1.mm.bing.net/th?id=OIP.QJ9_YCUUzSZfoaedEUlnkgHaJ4&pid=Api&P=0',
        title:'Women T-Shirt',
    },
    {
        id : '3',
        url : 'https://tse4.mm.bing.net/th?id=OIP.S8W_CRrBNeoE_zD4EHGO5AHaHa&pid=Api&P=0',
        title:'Kids',
    },
    {
        id : '4',
        url : 'https://tse3.mm.bing.net/th?id=OIP.oYczpZeAY3UoraB9aFR-4wHaHa&pid=Api&P=0',
        title:'Matching Wear',
    },
    {
        id : '5',
        url : 'https://tse2.mm.bing.net/th?id=OIP.W6EiBwrIdcLrZh52iEGN0gAAAA&pid=Api&P=0',
        title:'Party Wear',
    }
]

const dummydata3 = [
    {
        id :'12',
        url : 'https://tse4.mm.bing.net/th?id=OIP.FOXBjNCJg0mQ9uUHn_Ky3QHaHa&pid=Api&P=0',
        title :'Men',
    },
    {
        id :'22',
        url : 'https://tse2.mm.bing.net/th?id=OIP.pphk3WR-jO5q0qLcX98VxAHaJ3&pid=Api&P=0',
        title :'Women',
    },
    {
        id :'32',
        url : 'https://tse1.mm.bing.net/th?id=OIP.7EZB2y_Sa-TTihRcwrTyTwHaHa&pid=Api&P=0',
        title :'Kids',
    },
    {
        id :'42',
        url : 'https://tse3.mm.bing.net/th?id=OIP.lwjEn9U-EimdSSEYmPg4eQHaE8&pid=Api&P=0',
        title :'Watch',
    },
    {
        id :'52',
        url : 'https://tse2.mm.bing.net/th?id=OIP.bADsATYUWztk6B-rANbLYgHaHa&pid=Api&P=0',
        title :'Shoes',
    },
    {
        id :'62',
        url : 'https://tse1.mm.bing.net/th?id=OIP.xvQri_IGOHxGMF7vgMPNZgHaHa&pid=Api&P=0',
        title :'Caps',
    },
    {
        id :'72',
        url : 'https://tse2.mm.bing.net/th?id=OIP.ITBB4dXAi4-zXHOBXFkn1AHaE7&pid=Api&P=0',
        title :'Accessories',
    },
    
]

const Home = ({navigation}) => {
    const ref = React.useRef(null);
    const [INDEX , SETINDEX] = useState(0);

    useEffect(
        ()=>{
            ref.current?.scrollToIndex({
                index:INDEX,
                animation:true,  
            })

        },[INDEX]
    )

    return(
        <View style ={[GlobalStyles.fullScreen]}>
            <View style={{backgroundColor:'#e86d2d',alignItems:'center',paddingBottom:15,elevation:10}}>
                <InputField
                    placeholder={'Search here...'}
                    preffixIconName={'search1'}
                    preffixIconSize={20}
                    suffixIconName={'arrowright'}
                    suffixIconSize={22}
                    backgroundColor={'#fff'}
                    borderColor={'#e86d2d'}
                    onSuffixIconPress={()=> {}}
                />
            </View>
                <View style = {GlobalStyles.HomeCategoryView}>
                    <View style={GlobalStyles.HomeCategoryView_FirstH}>
                        <Text style={{fontSize:16,color:'#000',fontWeight:'600'}}>
                            Category
                        </Text>
                        <TouchableOpacity style={[GlobalStyles.centerAlignment,{flexDirection:'row'}]} onPress = {() => {navigation.navigate('All Catogoies')}}>
                            <Icon name="arrowright" color={'#000'} size={18}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <FlatList
                            horizontal
                            data={ dummydata3}
                            renderItem = {
                                ({item,index}) => {
                                    return(
                                        <View key={index}  style={GlobalStyles.HomeCategoryView_SecondH}>
                                                <Image style ={GlobalStyles.HomeCategoryView_SecondH_Img} source={{ uri:item.url}} />
                                        </View>
                                    )
                                }
                            }
                        />
                    </View>
                </View>


                <View style={GlobalStyles.swiperCard}>
                    <FlatList
                        scrollEnabled ={false}
                        ref={ref}
                        initialScrollIndex={INDEX}
                        horizontal
                        decelerationRate={0}
                        data = {dummySwiperData}
                        keyExtractor = { (item) => item.id }
                        snapToInterval={Dimensions.get('window').width}
                        renderItem = {
                            ({item}) => {
                                return(
                                    <TouchableOpacity>
                                        <View style={GlobalStyles.swiperCard}>
                                        <Image resizeMode={'stretch'} style={GlobalStyles.swiperImage} source={{uri:item.url}}/>
                                    </View>

                                    </TouchableOpacity>
                                )
                    }}
                    />
                    <View style={GlobalStyles.swiperDirection}>
                        <TouchableOpacity
                        onPress={
                            () => {
                                if(INDEX === 0){
                                    SETINDEX(dummySwiperData.length-1);
                                }else{
                                    SETINDEX(INDEX-1)
                                }
                            }
                        }
                        >
                            <Icon name="left" size={35} color={'red'} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={
                                () => {
                                    if(INDEX === dummySwiperData.length-1){
                                        SETINDEX(0);
                                    }else{
                                        SETINDEX(INDEX+1)
                                    }
                                }
                            }
                        >
                            <Icon name="right" size={35} color={'red'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text>
                        hello
                    </Text>

                </View>                
        </View>
    )
} 
export default Home;





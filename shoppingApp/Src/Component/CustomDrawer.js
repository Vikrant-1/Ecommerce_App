import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { View , Text, TouchableOpacity } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../Navigation_S/AuthProvider';
import auth from '@react-native-firebase/auth';

const  CustomDrawer = (props) => {

    const {logout}  = useContext(AuthContext);
    
    return(
        <>
            <DrawerContentScrollView {...props}>
                <View style={{padding:20,top:-5,backgroundColor:'#e86d2d'}}  >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={[GlobalStyles.centerAlignment , {width:70,height:70,backgroundColor:'#fff',borderRadius:50,marginRight:15}]}>
                        <Icon name='user' size={35}/>
                    </View>
                    <Text style={{fontSize:12,color:'#fff'}}>
                        {auth().currentUser.displayName}                      
                    </Text>
                    
                </View>
                </View>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={{height:1.3,backgroundColor:'#808080'}}></View>
            <View style={{paddingHorizontal:15,paddingVertical:10}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:12}} onPress={()=>{}}>
                    <Icon name='customerservice' size={19} color={'#000'}/>
                    <Text style={{fontSize:18, color:'#000',marginLeft:10}}>
                        Customer Service
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:12}}>
                    <Icon name='sharealt' size={19} color={'#000'}/>
                    <Text style={{fontSize:18, color:'#000',marginLeft:10}}>
                        Share
                    </Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>logout()} style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='logout' size={18} color={'#000'}/>
                    <Text style={{fontSize:18, color:'#000',marginLeft:10}}>
                        LogOut
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default CustomDrawer;
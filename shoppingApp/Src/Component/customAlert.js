import React from "react";
import {
    Animated,
    View,
    Text,
    TouchableOpacity,
    Modal,

} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { WIDTH } from "../Styles/GlobalStyles";

const CustomAlert = (props) => {
    const {isOpen , message, backgroundColor,contentColor,onClose} = props;
    return(
            <Modal animationType={'slide'} visible={isOpen} transparent >
                <Animated.View  style ={[{alignSelf:'center',height:50,borderRadius:12,position:'absolute',bottom:20,backgroundColor:backgroundColor,flexDirection:'row',padding:10,width:WIDTH*0.90,alignItems:'center',justifyContent:'space-between'}]}>
                    <Text style={{color:contentColor,fontSize:17,width:WIDTH*0.78}}>
                        {message}
                    </Text>
                    <TouchableOpacity onPress={onClose}>
                        <Icon style={{}} name={'close'} color={contentColor} size={18} />
                    </TouchableOpacity>
                </Animated.View>
            </Modal>
    )
}

export default CustomAlert;
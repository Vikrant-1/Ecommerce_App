import React, { useContext, useState } from "react";
import { TouchableOpacity, View,Text } from 'react-native';
import { CustonButton1 } from "../../Component/customButtons";
import InputField from "../../Component/InputField";
import Sperator from "../../Component/seperator";
import { AuthContext } from "../../Navigation_S/AuthProvider";
import GlobalStyles from "../../Styles/GlobalStyles";


const ForgotPassword  = ({navigation}) => {
    const [ email , setEmail] = useState('');

    const {changeUserPassword} = useContext(AuthContext);


    return(
        <View style={[GlobalStyles.fullScreen,{alignItems:'center'}]}>
            <Sperator height={'20%'}/>
            <InputField
                placeholder={'Email for Verification'}
                backgroundColor={'#e86d2d'}
                preffixIconName={'lock'}
                preffixIconSize={22}
                preffixIconColor={'#fff'}
                textColor={'#fff'}
                placeholderTextColor={'#fff'}
                borderColor={'#e86d2d'}
                onChangeText = {( text ) => {setEmail(text)}}
                
            />
            <Sperator height={40} />
            
            <CustonButton1
                title={'Confirm Password'}
                titleStyle={GlobalStyles.FontStyle1}
                buttonStyle={[GlobalStyles.centerAlignment,GlobalStyles.btn1]}
                onPress={() => changeUserPassword(email)}
            />
            
        </View>
    )
}
export default ForgotPassword;
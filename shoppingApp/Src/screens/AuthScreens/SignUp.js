import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,

} from 'react-native';
import GlobalStyles from "../../Styles/GlobalStyles";
import Icon from "react-native-vector-icons/AntDesign";
import InputField from "../../Component/InputField";
import Sperator, { OrSperator } from "../../Component/seperator";
import { CustonButton1 } from "../../Component/customButtons";
import { AuthContext } from "../../Navigation_S/AuthProvider";

const SignUpScreen = ({navigation}) => {

    // signup - firebase - logic
    const {register} = useContext(AuthContext);

    //  usestate for input fields
    const [registername , setRegisterName] = useState();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmpassword , setConfirmPassword] = useState('');

    


    //  Text input cahnge handlers 
    const onTextChangeHandler = (text , valuefor) => {
        if(valuefor === 'email') setEmail(text);
        if(valuefor === 'registername') setRegisterName(text);
        if(valuefor === 'password')setPassword(text);
        if(valuefor === 'confirmpassword') setConfirmPassword(text);
    }


  


    return(
        <View>
            <View style = {[GlobalStyles.SignUpHeader , {alignItems:'center'}]}>
                <TouchableOpacity style={{marginLeft:7,}} onPress={()=> {navigation.navigate('logIn')}}>
                    <Icon name="arrowleft" size={28} color={ '#fff' } />
                </TouchableOpacity>
                <Text style={[GlobalStyles.FontStyle1,{marginLeft:'24%'}]}>
                    Registration
                </Text>
            </View>
            <View style={GlobalStyles.SignupBottombody}>

                <InputField backgroundColor={'#e86d2d'}
                    preffixIconName={'user'}
                    preffixIconColor = {'#fff'}
                    preffixIconSize = {22}
                    placeholder={'Name'}
                    placeholderTextColor={'#fff'}
                    borderColor={'#e86d2d'}
                    textColor={'#fff'}
                    onChangeText ={(text) => onTextChangeHandler(text,'registername')}
                />

                <Sperator height={30}/>

                <InputField backgroundColor={'#e86d2d'}
                    value ={email}
                    preffixIconName={'mail'}
                    preffixIconColor = {'#fff'}
                    preffixIconSize = {22}
                    placeholder={'Enter your Email'}
                    placeholderTextColor={'#fff'}
                    borderColor={'#e86d2d'}
                    textColor={'#fff'}
                    onChangeText = {text=> onTextChangeHandler(text ,'email')}
                />
                <Sperator height={30}/>

                <InputField backgroundColor={'#e86d2d'}
                    value = {password}
                    preffixIconName={'lock'}
                    preffixIconColor = {'#fff'}
                    preffixIconSize = {22}
                    placeholder={'Password'}
                    placeholderTextColor={'#fff'}
                    borderColor={'#e86d2d'} 
                    textColor={'#fff'}
                    secureTextEntry={true} 
                    onChangeText = {text => onTextChangeHandler(text,'password')}
                    />

                <Sperator height={30}/>

                <InputField 
                    value={confirmpassword}
                    backgroundColor={'#e86d2d'}
                    preffixIconName={'lock'}
                    preffixIconColor = {'#fff'}
                    preffixIconSize = {22}
                    placeholder={'Confirm Password'}
                    placeholderTextColor={'#fff'}
                    borderColor={'#e86d2d'} 
                    textColor={'#fff'} 
                    secureTextEntry={true}
                    onChangeText = {(text) => {onTextChangeHandler(text,'confirmpassword')}}
                />

                <Sperator height={50}/>
                
                <CustonButton1 
                    title={'Registor'}
                    titleStyle = {GlobalStyles.FontStyle1}
                    buttonStyle = {[GlobalStyles.centerAlignment , GlobalStyles.btn1]}
                    onPress = {() => register(email,password,registername)}
                />
                
                <Sperator height={20}/>

                <OrSperator/>
                
                <Text style={{fontSize:18}}>
                    Already have a account ?
                    <Text onPress={()=>{navigation.navigate('logIn')}} style={{color:'#e86d2d'}}> Login</Text>
                </Text>


            </View>
        </View>
    )
}

export default SignUpScreen;
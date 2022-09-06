import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,

} from 'react-native';
import InputField from "../../Component/InputField";
import GlobalStyles from "../../Styles/GlobalStyles";
import  Icon  from "react-native-vector-icons/Fontisto";
import Sperator, { OrSperator } from "../../Component/seperator";
import { CustonButton1 } from "../../Component/customButtons";
import { AuthContext } from "../../Navigation_S/AuthProvider";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";


const LogInScreen =  ({navigation}) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const {login,googlelogin} = useContext(AuthContext);

    const onTextChangeHandler = (text , valuefor) => {
        if(valuefor === 'email') setEmail(text);
        if(valuefor === 'password') setPassword(text);
    }

    return(
        <View style={[ GlobalStyles.fullScreen , {backgroundColor:'#fff',alignItems:'center'}]}>
            <View style={[GlobalStyles.LoginTxt,GlobalStyles.centerAlignment]}>
                <Icon name="shopping-bag-1" size={130} color={'#fff'}/>
            </View>
            <View >
                <View style={GlobalStyles.LogInBottom2}>
                    <Sperator height={20}/>
                    <InputField
                        value={email}
                        preffixIconName={'user'} 
                        preffixIconColor = {'#292929'}
                        preffixIconSize = {22}
                        placeholder={'username or email'}
                        onChangeText={text => onTextChangeHandler(text , 'email')}
                     />
                    <Sperator height={20}/>

                    <InputField
                        value={password}
                        placeholder={'Enter a Password ... '}
                        preffixIconName={'lock1'}
                        preffixIconColor = {'#292929'}
                        preffixIconSize = {22}
                        onChangeText = {text => onTextChangeHandler(text , 'password')}
                    />
                    <Sperator height={10}/>
                    <TouchableOpacity onPress={()=>navigation.navigate('forgotPassword')} style={{ left:100}}>
                        <Text>
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity>
                    <Sperator height={20}/>
                    <CustonButton1 
                        title={'Log in'}
                        titleStyle={GlobalStyles.FontStyle1}
                        buttonStyle={[GlobalStyles.centerAlignment,GlobalStyles.btn1]}
                        onPress={() => login(email,password)}
                    />
                    <OrSperator/>
                    <GoogleSigninButton
                    onPress={()=> googlelogin()}
                    color={0}
                    size={1}
                    >
                    </GoogleSigninButton>
                   
                    <Sperator height={20}/>
                    <View style={{flexDirection:'row'}}>
                        <Text>
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity onPress={ () => {navigation.navigate('signup')} }>
                            <Text  style={{color:'#e86d2d'}} > Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

export default LogInScreen;
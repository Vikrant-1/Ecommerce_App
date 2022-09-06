import React, { useContext, useState } from 'react';
import { 
    View,Button, TextInput, Text, TouchableOpacity
    
 } from 'react-native';
import GlobalStyles,{HEIGHT, WIDTH} from '../../Styles/GlobalStyles';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../Navigation_S/AuthProvider';
import Icon from 'react-native-vector-icons/AntDesign';
import { CustonButton1 } from '../../Component/customButtons';


export default function MyAccount({navigation}) {
    const {user,changeuserName} = useContext(AuthContext);
    const [name , setName] = useState(user.displayName);


    const Savedata = async () => {
        await changeuserName(name);
        setName(auth().currentUser.displayName);
        navigation.goBack();

    }


    const OnChangeHandler = (text,valuefor) => {
        if(valuefor === 'name')setName(text);
    }

    
    
    return(
        <View style={[GlobalStyles.fullScreen,GlobalStyles.accountSettingBody]}>
            <View style={{width:WIDTH,height:HEIGHT*0.08,justifyContent:'center',paddingLeft:15}}>
                <TouchableOpacity style={{width:40}} onPress={()=> navigation.goBack()}>
                    <Icon name='arrowleft' size={35}/>
                </TouchableOpacity>
            </View>
            <View style={[GlobalStyles.centerAlignment,{height:120,width:120,backgroundColor:'#000',borderRadius:60}]}>
                <Icon name='user' size={65} color={'#fff'}/>

            </View>
            <View>
                <View style={{marginVertical:20,}}>
                    <Text>
                        Name
                    </Text>
                    <TextInput
                        style={GlobalStyles.settingInputs}
                        value={name}
                        placeholder={'username'}
                        onChangeText = {(text) => OnChangeHandler(text,'name')}
                    />

                </View>

                <View>
                    <Text>
                        E-mail
                    </Text>
                    <TextInput
                        editable={false}
                        style={GlobalStyles.settingInputs}
                        value={user.email}
                        placeholder={'username'}
                    />

                </View>
                

                <View style={{height:40}}></View>
                <CustonButton1
                    title={'Save'}
                    titleStyle={GlobalStyles.FontStyle1}
                    buttonStyle={[GlobalStyles.centerAlignment,GlobalStyles.btn1]}
                />

            </View>
            
            

        </View>
    )
}

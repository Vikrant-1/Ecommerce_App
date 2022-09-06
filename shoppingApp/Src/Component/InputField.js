import React from "react";
import { TextInput, TouchableOpacity, View } from 'react-native';
import  Icon  from "react-native-vector-icons/AntDesign";
import GlobalStyles from "../Styles/GlobalStyles";

const InputField = ({
    value,
    placeholder,
    secureTextEntry,
    onChangeText,
    suffixIconName,
    preffixIconName,
    suffixIconColor,
    preffixIconColor,
    preffixIconSize,
    suffixIconSize,
    backgroundColor,
    placeholderTextColor,
    borderColor,
    textColor,
    onSuffixIconPress,
    
    
}) => {
    return(
        <View style={[GlobalStyles.InputFieldBox , {backgroundColor:backgroundColor,borderColor:borderColor}]}>
            <Icon style = {GlobalStyles.Iconstyles} name= { preffixIconName } color={ preffixIconColor } size ={preffixIconSize}/>
            <TextInput 
                style={[GlobalStyles.InputFieldStyle , {color:textColor}]}
                value={ value }
                placeholder = {placeholder}
                secureTextEntry ={secureTextEntry}
                onChangeText={ onChangeText }
                placeholderTextColor = { placeholderTextColor }
                
            />    
            <TouchableOpacity onPress={onSuffixIconPress}>
                <Icon  style = {GlobalStyles.Iconstyles}  name={suffixIconName} color={ suffixIconColor}  size ={suffixIconSize}/>            
            </TouchableOpacity>  
        </View>
    )
}

export default InputField;
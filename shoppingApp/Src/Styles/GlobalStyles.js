import { Dimensions, StyleSheet } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

const CONTAINER_01_HEIGHT = HEIGHT*0.4;
const CONTAINER_01_WIDTH = WIDTH*0.72;

const HOME_CATEGORY_CONTAINER_HEIGHT = HEIGHT *0.15;

export default StyleSheet.create({
    HeaderTitle:{
        color:'#fff',
    },
    LoginTxt:{
        width:WIDTH,
        height:HEIGHT/3,
        backgroundColor:'#e86d2d',
        elevation:10,
        borderBottomLeftRadius:34,
        borderBottomRightRadius:34,
    },

    fullScreen :{
        width:WIDTH,
        height:HEIGHT,
    },

    centerAlignment:{
        alignItems:'center',
        justifyContent:'center',
    },

    InputFieldBox:{
        borderWidth:1,
        width:WIDTH - 50,
        height:50,
        flexDirection:'row',
        borderRadius:24,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    
    InputFieldStyle :{
        width:WIDTH-130,

    },

    Iconstyles:{
        marginLeft:7,
        width:(WIDTH-(WIDTH-30)),
    },


    LogInBottom2:{
        alignItems:'center'
    },

    btn1:{
        width:WIDTH-100,
        height:50,
        borderRadius:34,
        backgroundColor:'#e86d2d',
        elevation:10,
    },

    FontStyle1:{
        fontSize:18,
        color:'#fff',
    },
    SperatorView:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:30,
    },
    SperatorLine:{
        width:WIDTH/2-30,
        borderBottomWidth:1,
    },
    // Sign up Screen
    SignUpHeader:{
        width:WIDTH,
        height:60,
        backgroundColor:'#e86d2d',
        flexDirection:'row',
    },
    SignupBottombody:{
        width:WIDTH,
        height:HEIGHT-120,
        alignItems:'center',
        marginTop:30,
    },
    headerStyle:{
        backgroundColor:'#e86d2d'
    },
    MainScreenHeader:{
       height:100,
    },
    SearchBar:{
        flexDirection:'row',
        marginHorizontal:15,
        height:45,
        borderRadius:16,
        alignItems:'center',
        borderWidth:1.5,
        paddingHorizontal:10,
    },
    SearchBarInput:{
        width:WIDTH -100,
        backgroundColor:'red'
    },

    CategoryCardStyle:{
        height:150,
        width:WIDTH/2 -20,
        borderRadius:12,
        backgroundColor:'#1e78a1',
        margin:5,


    },
    CategoryCardImage:{
        height:100,
        width:WIDTH/2 -50,

    },

    // Home page Swipper 
    swiperCard:{
        height:HEIGHT*0.25,
        width:WIDTH,
        justifyContent:'center'
    },

    swiperImage :{    
        width:WIDTH,
        height:HEIGHT*0.25,
    },

    swiperDirection:{
        flexDirection:'row',
        position:'absolute',
        zIndex:1,
        // backgroundColor:'#000',
        width:WIDTH-20,
        justifyContent:'space-between',
        alignSelf:'center'
    },

    HomeCategoryView:{
        width:WIDTH,
        height:HOME_CATEGORY_CONTAINER_HEIGHT,
        
    },

    HomeCategoryView_FirstH:{
        width:WIDTH,
        height : HOME_CATEGORY_CONTAINER_HEIGHT*0.3 ,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:8,
        paddingRight:20,
        paddingVertical:4,
    },
    HomeCategoryView_SecondH:{
        justifyContent:'center',
        marginLeft:15
    },

    HomeCategoryView_SecondH_Img:{
        width:75,
        height:HOME_CATEGORY_CONTAINER_HEIGHT*0.65,
        borderRadius:50,
    },


    // account setting

    accountSettingBody:{
        alignItems:'center'
    },
    settingInputs:{
        width:WIDTH*0.70,
        paddingVertical:1,
        borderBottomWidth:1,
        
    }

})
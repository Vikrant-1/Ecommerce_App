import React from "react";
import Home from "../screens/HomeScreens/Home";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyAccount from "../screens/DrawerNavigationScreens/MyAccount";
import MyWishList from "../screens/DrawerNavigationScreens/WishList";
import { MyOrderScreen } from "../screens/DrawerNavigationScreens/MyOrder";
import AllCategory from "../screens/DrawerNavigationScreens/Categories";
import CustomDrawer from "../Component/CustomDrawer";
import Icon from "react-native-vector-icons/AntDesign"; 
import MyCart from '../screens/DrawerNavigationScreens/MyCart'

const Drawer = createDrawerNavigator();

const AppStack  = () => {
    return(
        <Drawer.Navigator initialRouteName="Home"
        drawerContent={
           props => <CustomDrawer {...props}/>          
        }
        screenOptions={{
            headerStyle:{backgroundColor:'#e86d2d'},
            drawerLabelStyle:{marginLeft:-25},
            drawerActiveBackgroundColor:'#fae1d5',
            drawerType:'front',
            drawerActiveTintColor:'#000',
            headerTitleAlign:'center',
            headerTintColor:'#fff'

        }}
        >
            <Drawer.Screen
            options={{
                
                drawerIcon: ({color}) => (
                    <Icon name="home" size={17} color={color}/>
                ),

            }}
            
            name="Home" component={Home}  size={17} />

            <Drawer.Screen
                options={{
                    drawerIcon: ({color}) => (
                        <Icon name="appstore-o"  size={17} color={color}/>
                    )
    
                }}
            name="All Catogoies" component={ AllCategory }/>
            <Drawer.Screen 
                options={{
                    drawerIcon: ({color}) => (
                        <Icon name="hearto"  size={17} color={color}/>
                    )
    
                }}
            name="Wishlist" component={ MyWishList }/>

            <Drawer.Screen
                options={{
                    title:'Cart',
                    drawerIcon: ({color}) => (
                        <Icon name="shoppingcart"  size={17} color={color}/>
                    )
    
                }}

                name="MyCart"  component={ MyCart }
            
            />


            <Drawer.Screen 
                options={{
                    title:'Orders',
                    drawerIcon: ({color}) => (
                        <Icon name="dropbox"  size={17} color={color}/>
                    )
    
                }}
            
                name="MyOrder"  component={ MyOrderScreen }/>
                
            <Drawer.Screen 
                options={{
                    
                    headerShown:false,
                    title:'Account',
                    drawerIcon: ({color}) => (
                        <Icon name="user"  size={17} color={color}/>
                    )
                }}
            name="MyAccount" component={ MyAccount }/>

        </Drawer.Navigator>
    )
}

export default AppStack;
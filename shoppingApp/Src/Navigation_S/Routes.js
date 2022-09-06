import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./homeNavigation";
import NavigationBox from "./navigation_S";
import auth from '@react-native-firebase/auth';
import { AuthContext } from "./AuthProvider";

const Route = () => {
    const {user , setUser} = useContext(AuthContext);

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);

    // // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }

    useEffect(
        () =>{
            const Subsciber = auth().onAuthStateChanged(onAuthStateChanged);
            return Subsciber;
        },[]
    )
    
    if(initializing) return null;
    return(
        <NavigationContainer>
           {user ? <AppStack/> : <NavigationBox/>}
        </NavigationContainer>
    )
}

export default Route;
import React ,{createContext, useState } from "react";
import CustomAlert from "../Component/customAlert";


export const AlertContext = createContext();
const initialState = {
    isOpen: false,
    message: '',
    backgroundColor:'#fff',
    contentColor:'#000',
  };
export const AlertProvider = (props) => {
    const [alertState, setAlertState] = useState(initialState);

    alert = (message,backgroundColor,contentColor) => {
        setAlertState({
            isOpen:true,
            message,
            backgroundColor,
            contentColor,
        })
    }

    onClose = () => {
        setAlertState(initialState);
    }

    return(

        <>
            <AlertContext.Provider value={alert}>
                {props.children}
            </AlertContext.Provider>
            <CustomAlert {...alertState} onClose={onClose}/>
        </>
    )

}
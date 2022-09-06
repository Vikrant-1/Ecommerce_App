import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import useAlert from '../Customfunction/alertFunc';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const alert = useAlert(); // first alertmessage , bacgrouncolor , content color
    return(
        <AuthContext.Provider
        value={{
            user,
            setUser,
            login : async(email,password) => {

                try {
                    await auth().signInWithEmailAndPassword(email,password).then(()=>console.log('logged IN')).catch(
                        (error)=>{
                            switch (error.code) {
                                case 'auth/wrong-password':
                                    alert('Wrong password','red','#fff');
                                    break;
                                case 'auth/invalid-email':
                                    alert('Invalid email','red','#fff');
                                    break;
                                case 'auth/user-disabled':
                                    alert('User disabled','red','#fff');
                                    break;
                                                
                            }
                        }
                    )
                    
                } catch (error) {
                    console.log(error)
                    
                }
            },
            googlelogin:async () => {
                try {
                    GoogleSignin.configure({
                        webClientId: '630639763910-b74826t6lopm4bpeehl8j8ct3kipd5ur.apps.googleusercontent.com',

                    });
                    // Get the users ID token
                    const { idToken } = await GoogleSignin.signIn();

                    // Create a Google credential with the token
                    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                    // Sign-in the user with the credential
                    await auth().signInWithCredential(googleCredential);
                    
                    
                } catch (error) {
                    console.log(error);
                    
                }
            } ,
            register : async(email, password,name) => {
                try {
                    await auth().createUserWithEmailAndPassword(email,password)
                    .then(
                        async() => {
                            await auth().currentUser.updateProfile({
                                displayName:name,
                            })
                        })
                    .then(
                        async() => {
                           await auth().currentUser.sendEmailVerification().catch(
                            (error)=> alert(error)                           
                            )
                        }
                    )
                } catch (error) {
                    console.log(error);
                }
            },
            logout : async() =>{
                try {
                   await auth().signOut();
                } catch (error) {
                    console.log(error);
                }
            },
            changeuserName : async(changedName) =>{
                try {
                    await auth().currentUser.updateProfile({
                        displayName:changedName,
                    })
                    
                } catch (error) {
                    console.log(error);
                    
                }
            },
            changeUserPassword : async (email) => {
                try {
                    await auth().sendPasswordResetEmail(email).then(
                        () => {
                            alert('Password Reset Email Sent !!')
                        }
                    )
                    
                } catch (error) {
                    console.log(error);
                    
                }
            }

        }}
        
        >
            {children}

        </AuthContext.Provider>
    )
}
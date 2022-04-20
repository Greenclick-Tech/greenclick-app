import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { AsyncStorage } from 'react-native';

export const AuthContext = React.createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

const AuthProvider = ({children, navigation}) => {
    
    //Creating state for user
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user,
            login: async(email, password) => {
                //Context configuration for logging in
                axios({
                    method: 'post',
                    url:"http://serverofflinern/api/",
                    data: {
                        email: email,
                        password: password
                    }

                })
                
                .then((res)=>{
                    const AppUser = {id: res.data.userId, token: res.data.accessToken}
                    setUser(AppUser)
                    AsyncStorage.setItem("user", JSON.stringify(AppUser))
                })
                .catch((err)=> {
                    console.log(err.message)
                })

                
                
            },
            logout: () => {
                //Removing user from storage
                AsyncStorage.removeItem("user");
            },
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
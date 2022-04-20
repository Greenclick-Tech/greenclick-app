import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, ActivityIndicator, AsyncStorage } from 'react-native';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from './authProvider';
import AuthScreens from './authScreens'
import AppScreens from './appScreens';
//Creating stack navigation for navigation via react-navigation



//Creating Routes for each page in application
const Routes = ({}) => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    //Seeing if the user is already authenticated with local storage
    useEffect(() => {
        AsyncStorage.getItem('user')
        .then( res => {
            if (res) {
                login();
            } else {
                setLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });

    }, [])

    // loading indication when app loads specific screens
    if (loading) {
        return (
            <View>
                <ActivityIndicator color="#9F79FE" size="large"/>
            </View>
        );
    }

    return (
        <NavigationContainer>
            {/* Displays screens requiring auth or not requiring auth */}
            { 
            user ? 
            <AppScreens></AppScreens>
            : 
            <AuthScreens></AuthScreens> 
            }
        </NavigationContainer>
        
    )
}

export default Routes;
import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './authProvider';
import { Button, Text } from 'react-native';
import NavTabs from '../components/navtabs';

const Stack = createStackNavigator()

//Screens under stack navigator
const AppScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="NavTab" 
            component={NavTabs}
            options={{
                headerShown: false
            }} 
            />
        </Stack.Navigator>
    )
}

export default AppScreens
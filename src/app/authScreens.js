import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text } from 'react-native';
import Center from '../components/center';
import StartPage from './pages/pages-auth/start-page';
import LoginCredentials from './pages/pages-auth/login-page';
import CreateAccount from './pages/pages-auth/create-account-page';

const Stack = createStackNavigator()


//---- Screen Creation:
// const Login = ({navigation}) => {
//     const {login} = useContext(AuthContext);
//     return (
//         <Center>
//             {/* <Text>Login</Text>
//             <Button 
//                 title="login" 
//                 onPress={()=> {
//                     login();
//                 }}
//             />
//             <Button 
//                 title="logout" 
//                 onPress={()=> {
//                     logout();
//                 }}
//             />
//             <Button 
//                 title="Test" 
//                 onPress={()=> {
//                     navigation.navigate('Test')
//                 }}
//             /> */}
//             <StartPage></StartPage>
//         </Center>
//     )
// }
const Register = () => {
    return (
        <Center>
            <Text>Register</Text>
        </Center>
    )
}

//---- End Screen Creation

//Screens under stack navigator
const AuthScreens = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerTintColor: '#115c4a'
            }}
        >
            <Stack.Screen
                options={{headerShown: false}}
                name='Login' 
                component={StartPage} 
            />
            <Stack.Screen 
                name='Register' 
                component={CreateAccount}
                options={{title: 'Create an Account'}}
            />

            <Stack.Screen
                name='LoginCred'
                component={LoginCredentials}
                options={{title: 'Sign in'}}
            />

        </Stack.Navigator>
    )
}

export default AuthScreens
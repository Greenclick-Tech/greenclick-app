import React, {useContext, useEffect, useState} from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import Center from '../../../../components/center';
import { AuthContext } from '../../../authProvider';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
//import LottieView from 'lottie-react-native';

const Cont = styled.View`
    flex: 1;
`;

const Logo = styled.Image`
    width: 150px;
    height: 150px;
    margin: 20px;
`;

const Subtitle = styled.Text`
    color: #3B414B;
    font-weight: bold;
    text-align: center;
    line-height: 24px;

`;

const ButtonContainer = styled.View`
    width: 100%;
    padding-top: 80px;
`;

const StartPage = ({navigation}) => {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    return (
        <Cont>
            <Center>
                {/* <LottieView 
                source={require('../../../../assets/animation.json')} 
                autoPlay 
                loop
                imageAssetsFolder={'assets'}
                /> */}
                <Subtitle>GreenClick</Subtitle>
                <ButtonContainer>
                    <Button title={"Login"} onPress={()=> {
                        navigation.navigate('LoginCred')
                    }}>
                    </Button>
                    <Button 
                    title={"Create an Account"}
                    onPress={()=> {
                        navigation.navigate('Register')
                    }}
                    />
                    {/* <Button 
                    title={"test"}
                    onPress={()=> {
                        navigation.navigate('Test')
                    }}
                    ></Button> */}
                </ButtonContainer>
            </Center>
        </Cont>
    )
};

StartPage.defaultProps = {

};

export default StartPage;
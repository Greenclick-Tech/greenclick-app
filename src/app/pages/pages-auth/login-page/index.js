import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import { AuthContext } from '../../../authProvider';
import Center from '../../../../components/center';
import CustomInput from '../../../../components/Input';
import ButtonFooter from '../../../../components/button-footer';
import { Button } from 'react-native';

const Cont = styled.View`
    flex: 1;
`;

const FlexWrap = styled.View`
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

const ButtonContainer = styled.View`
    width: 100%;
    padding-top: 80px;
`;


const LoginCredentials = ({navigation, route}) => {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Cont>
            <Center>
            <CustomInput
                title={"Email"}
                placeholder={"name@email.com"}
                onChange={(e)=> setEmail(e)}
            />
            <CustomInput
                title={"Password"}
                placeholder={"Password"}
                onChange={(e)=> setPassword(e)}
                password
            />
            <ButtonContainer>
                <Button
                title={"Login"} 
                onPress={()=> {
                    login(email, password)
                }}
                />
                <ButtonFooter 
                    onPress={()=> {
                        navigation.navigate('Register')
                    }}
                />
            </ButtonContainer>
            
            </Center>
        </Cont>
    )
};

LoginCredentials.defaultProps = {

};

export default LoginCredentials;
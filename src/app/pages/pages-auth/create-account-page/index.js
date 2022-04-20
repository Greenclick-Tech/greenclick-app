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



const CreateAccount = ({navigation}) => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useContext(AuthContext);
    return (
        <Cont>
            <Center>
            <FlexWrap>
                <CustomInput 
                    title={"Full Name"}
                    placeholder={"Full Name"}
                    onChange={(e)=> {
                        setFullname(e)
                        console.log(fullname)
                    }}
                />

            </FlexWrap>
            
            <CustomInput
                title={"Email"}
                placeholder={"name@email.com"}
                onChange={(e)=> {
                    setEmail(e)
                    console.log(fullname, email, password)
                }}
            />
            <CustomInput
                title={"Password"}
                placeholder={"Password"}
                onChange={(e)=> {
                    setPassword(e)
                    console.log(fullname, email, password)
                }}
                password
            />
            <ButtonContainer>
                <Button 
                title={"Next"} 
                onPress={()=> {
                    navigation.navigate('ChooseLanguage', {
                        email: email,
                        fullname: fullname,
                        password: password
                    })
                }}
                />
                <ButtonFooter
                    text={"Already have an Account? Login"}
                    onPress={()=> {
                        navigation.navigate('LoginCred')
                    }}
                />
            </ButtonContainer>
            
            </Center>
        </Cont>
    )
};

CreateAccount.defaultProps = {

};

export default CreateAccount;
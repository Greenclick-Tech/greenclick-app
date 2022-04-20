import React, { useState } from 'react';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'react-native';

const InputContainer = styled.View`
    width: 100%;
    background-color: ${props=>props.background ? props.background : "#fff"};
    padding: 15px;
    border: ${props=>props.background ? props.background : "1px solid #eeeeee"};
    border-radius: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.TextInput`
    background-color: ${props=>props.background ? props.background : "#fff"};
    flex: 1;
    color: ${props=>props.color ? props.color : "#121212"};
    justify-content: flex-start;
`;


const Title = styled.Text`
    padding: 10px 0px;
    color: ${props=>props.color ? props.color : "#2E2727"};
    display: ${props=>props.display ? "none" : "flex"};
    font-weight: ${props=>props.fontweight ? 'bold' : 'normal'}
`;

const Wrapper = styled.View`
    width: ${props=>props.half ? "48%" : "100%"};
    padding: 6px 0px;
`;

const PasswordView = styled.TouchableOpacity`
    display: ${props=>props.display ? 'flex' : 'none'};
`;

const Error = styled.Text`
    color: #eb3434;
    margin: 4px 0px;
    font-size: 12px;
    display: ${props=>props.display ? "flex" : "none"}
`;

const ButtonWrapper = styled.View`
    display: ${props=>props.display ? "flex" : "none"}; 

`;

const CoolButton = styled.Button`
`;

const CustomInput = ({background,onButtonPress, buttondisplay, fontweight, titlecolor, maxlength, colorplace, color, placeholder, titledisplay, half, title, password, display, onChange,numberOfLines, multiline}) => {
    const [iconname, setIconName] = useState('eye-off-outline')
    return (
        <Wrapper half={half}>
            <Title fontweight={fontweight} color={titlecolor} display={titledisplay}>{title}</Title>
            <InputContainer background={background}>
                <Input
                    color={color}
                    placeholderTextColor={colorplace}
                    background={background}
                    placeholder={placeholder}
                    secureTextEntry={iconname == 'eye-off-outline' ? false : true}
                    onChangeText={onChange}
                    numberOfLines={numberOfLines}
                    multiline={multiline}
                    maxLength={maxlength}
                    
                />
                <PasswordView 
                display={password}
                onPress={()=> {
                    iconname == 'eye-off-outline' ?
                    setIconName('eye-outline')
                    :
                    setIconName('eye-off-outline')
                }}
                >
                    <Ionicons name={iconname} size={24}/>
                </PasswordView>
                <ButtonWrapper display={buttondisplay}>
                    <CoolButton onPress={onButtonPress} title={"Send"}>

                    </CoolButton>
                </ButtonWrapper>
                
            </InputContainer>
            <Error display={display}>Username or Password is Incorrect</Error>
        </Wrapper>
        
    )
};

CustomInput.defaultProps = {
    placeholder: "Hello World",
    half: false,
    title: "Hello World",
    password: false,
    numberOfLines: 1,
    multiline: false,
    maxlength: 254
};

export default CustomInput;
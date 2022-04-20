import React from 'react';
import styled from 'styled-components/native';

const TextContainer = styled.TouchableOpacity`
    width: 100%;
`;

const CustomText = styled.Text`
    color: #115c4a;
    font-weight: 600;
    text-align: center;
`;

const ButtonFooter = ({text, onPress}) => {
    return (
        <TextContainer onPress={onPress}>
            <CustomText>{text}</CustomText>
        </TextContainer>
    )
};

ButtonFooter.defaultProps = {
    text: "Dont have an account? Sign up"
};

export default ButtonFooter;
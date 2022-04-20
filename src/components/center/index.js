import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0px 20px;
`;

//Shortcut to center anything left - right, top - bottom
const Center = ({ children }) => {
    return (
        <Cont>{children}</Cont>
    )
};

Center.defaultProps = {

};

export default Center;
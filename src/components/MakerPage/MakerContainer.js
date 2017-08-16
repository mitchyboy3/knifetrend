import React from 'react';
import styled from 'styled-components';

import MenuContainer from './MakerMenu/MenuContainer';

const MakerContainer = () => {
    return (
        <Container>
            <MenuContainer/>
        </Container>
    );
};

export default MakerContainer;

const Container = styled.section`
    background: #f5f5f5;
    width: 40px;
    ${props => props.theme.media.tablet} {
        width: initial;
    }
`
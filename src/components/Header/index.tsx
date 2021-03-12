import React from 'react';

import { Title } from './styles';

const Header: React.FC = ({children}) => {


    return (
        <header>
            <Title>{children}</Title>
        </header>
        
    );
}

export default Header;
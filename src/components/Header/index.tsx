import React from 'react';

import { MainHeader } from './styles';

const Header: React.FC = ({children}) => {


    return (
        <MainHeader>{children}</MainHeader>
    );
}

export default Header;
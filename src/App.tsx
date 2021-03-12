import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
        <Header>
            Previsão do Tempo
        </Header>
        <GlobalStyle />
    </>
  );
}

export default App;

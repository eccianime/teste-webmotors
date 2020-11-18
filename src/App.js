import React from 'react';
import { GlobalStyle, Container } from './AppStyle'

import Logo from './components/AtomicItems/Logo';
import TabHeader from './components/TabHeader';
import TabContents from './components/TabContents'

const App = () => { 
  return (
    <>
    <GlobalStyle/>
    <Container>
      <Logo />
      <TabHeader/>
      <TabContents />
    </Container>
    </>
  );
}

export default App;
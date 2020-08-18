import React from 'react';
import Routes from './src/utils/Routes';
import UserProvider from './src/context/User';
const App = () => {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
};

export default App;

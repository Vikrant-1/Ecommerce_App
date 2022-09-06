import React from 'react';
import { AlertProvider } from './Src/Navigation_S/AlertProvider';
import { AuthProvider } from './Src/Navigation_S/AuthProvider';
import Route from './Src/Navigation_S/Routes';
const App = ()  => {

  return (
    <AlertProvider>
      <AuthProvider>
        <Route/>
      </AuthProvider>
    </AlertProvider>
  );
};



export default App;

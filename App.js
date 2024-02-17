// App.js
import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import Routes from './src/routes/routes';

const App = () => {
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  );
}

export default App;

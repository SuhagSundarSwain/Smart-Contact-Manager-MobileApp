import React, {StrictMode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/routes/TabNavigation';
import ThemeContextProvider from './src/store/context-store/ThemeContext';

const App = () => {
  return (
    <StrictMode>
      <ThemeContextProvider>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </ThemeContextProvider>
    </StrictMode>
  );
};

export default App;

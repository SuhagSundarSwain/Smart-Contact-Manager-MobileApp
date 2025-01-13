import React, {StrictMode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/routes/TabNavigation';
import ThemeContextProvider from './src/store/context-store/ThemeContext';
import {Provider} from 'react-redux';
import store from './src/store/redux-store/redux_store';

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeContextProvider>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </ThemeContextProvider>
      </Provider>
    </StrictMode>
  );
};

export default App;
